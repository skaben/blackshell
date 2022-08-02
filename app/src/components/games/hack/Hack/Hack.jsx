import React from 'react';
import {useState, useMemo, useContext} from 'react';
import { randomDecimal } from 'Helpers/misc.js';
import { HackTrace } from 'Components/games/hack/HackTrace/HackTrace.jsx';
import { HackField } from '../HackField/HackField';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import { nanoid } from 'nanoid';
import { HackContext, HackContextProvider } from '../context';
import styles from './styles.module.scss';


const generateField = (height, width) => {
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(48, 72).toString(16)));
}

export const Hack = () => {
  const height = 8;
  const width = 12;
  const tries = 5;

  const field = useMemo(() => generateField(height, width), [retrigger]);
  const [retrigger, setRetrigger] = useState(false);

  const startState = {
    'width': width,
    'height': height,
    'field': field,
    'tries': tries
  }

  return (
    <HackContextProvider addState={startState}>
      <div className={styles.root}>
        <HackTrace source={field} len={tries - 1}/>
        {/* {state.end && <p>you failed</p>} */}
        <div className={styles.field}>
          <HackField className={styles.grid}>
            {field.map((arr, idxRow) => {
              return arr.map((hexValue, idxCol) => {
                return <HackFieldCell key={nanoid()}
                                      pos={`${idxRow}:${idxCol}`}
                                      hex={hexValue}
                                      className={styles.cell}
                                      />
              })
            })}
          </HackField>
        </div>
        {/* <button className={styles.start} onClick={handleStart}>START GAME</button> */}
        <button className={styles.start} onClick={() => setRetrigger(!retrigger)}>RESET GAME</button>
      </div>
    </HackContextProvider>
  )
}

