import React from 'react'
import classnames from 'classnames';
import {useContext} from 'react';
import { HackContext } from '../context';
import actions from '../context/actions';
import styles from './styles.module.scss'


export const HackTraceCell = ({ hexCode, index, className}) => {

  const [state, dispatch] = useContext(HackContext);

  const highlightOn = () => {
    const filtered = state.field.reduce((accum, row, rowIdx) => {
        row.forEach((cell, colIdx) => {
          if (cell === hexCode) {
            accum = [...accum, [rowIdx, colIdx]];
          }
        })
        return accum;
      }, []);
    dispatch({type: actions.HIGHLIGHT, payload: filtered});
  }

  const highlightOff = () => {
    dispatch({type: actions.HIGHLIGHT, payload: []});
  }

  return (
    <div
      className={classnames(styles.root, className)}
      tabIndex={index + 1}
      onMouseEnter={highlightOn}
      onFocus={highlightOn}
      onMouseLeave={highlightOff}
      onBlur={highlightOff}
    >
      {hexCode}
    </div>
  )
}
