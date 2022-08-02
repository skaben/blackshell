import React from 'react';
import {useEffect} from 'react';
import hackInitialState from './state.js';
import rootReducer from './reducers.js';
import actions from './actions.js';
 
const HackContext = React.createContext()

const HackContextProvider = React.memo(({ addState, children }) => {
  const initialState = {...hackInitialState, ...addState};
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
    
  useEffect(() => {
    const cells = state.mode === 'horizontal'
                             ? state.field.map((_, idx) => [idx, state.col])
                             : [...Array(state.width)].map((_, idx) => [state.row, idx])
    dispatch({type: actions.HIGHLIGHT, payload: cells});
  }, [state.row, state.col, state.mode])
 
  return (
    <HackContext.Provider value={[state, dispatch]}>
      { children }
    </HackContext.Provider>
  );
});

HackContextProvider.displayName = 'HackContextProvider';

export { HackContextProvider, HackContext };