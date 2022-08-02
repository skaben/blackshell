import React from 'react';
import {useState, useEffect, useReducer} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';


const positionReducer = (state, action) => {
  let newCol,
      newRow;

  switch (action.key) {
    case "a":
    case "ArrowLeft":
      newCol = state.col > 0 ? state.col - 1 : state.col; 
      return state.mode === 'horizontal' ? {...state, col: newCol} : state;
    case "d":
    case "ArrowRight":
      newCol = state.col < state.maxCol ? state.col + 1 : state.maxCol;
      return state.mode === 'horizontal' ? {...state, col: newCol} : state;
    case "w":
    case "ArrowUp":
      newRow = state.row > 0 ? state.row - 1 : state.row;
      return state.mode === 'vertical' ? {...state, row: newRow} : state;
    case "s":
    case "ArrowDown":
      newRow = state.row < state.maxRow ? state.row + 1 : state.maxRow;
      return state.mode === 'vertical' ? {...state, row: newRow} : state;
    case "Enter":
      const newMode = state.mode === 'horizontal' ? 'vertical' : 'horizontal';
      return {...state, mode: newMode, sel: [state.col, state.row]};
    default:
      return state;
  }
}


export const HackField = ({source, className, setSelected, children}) => {
  const rows = source.length;
  const cols = source[0].length;

  const initialState = {
    'col': 0,
    'row': 0,
    'maxCol': cols - 1,
    'maxRow': rows - 1,
    'mode': 'horizontal'
  }

  const [stateMove, dispatchMove] = useReducer(positionReducer, initialState);
  const handleControls = (e) => dispatchMove({type: 'move', key: e.key});
  
  useEffect(() => {
    const selected = stateMove.mode === 'horizontal'
                                    ? children.map(row => row[stateMove.col])
                                    : children.filter((_, idx) => idx === stateMove.row)[0];
    setSelected(selected.map(child => child.props.id));
  }, [stateMove.row, stateMove.col])

  return (
    <div className={classnames(styles.root, className)}
         tabIndex="1"
         style={{grid: `repeat(${rows}, auto) / repeat(${cols}, auto)`}}
         onKeyDown={handleControls}>
      {children}
    </div> 
  )
}