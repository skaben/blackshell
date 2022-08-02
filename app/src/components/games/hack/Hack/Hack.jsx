import React from 'react';
import {useState, useMemo, useEffect} from 'react';
import { randomDecimal } from 'Helpers/misc.js';
import { HackTraceMemoized } from 'Components/games/hack/HackTrace/HackTrace.jsx';
import { HackField } from '../HackField/HackField';
import { HackFieldCell } from '../HackFieldCell/HackFieldCell';
import styles from './styles.module.scss';
import { nanoid } from 'nanoid';


const generateField = (height, width) => {
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(48, 72).toString(16)));
}

export const Hack = () => {
  const height = 8;
  const width = 12;
  const dataAttr = 'data-code';

  const field = useMemo(() => generateField(height, width), [retrigger]);
  const [selected, setSelected] = useState([]);
  const [retrigger, setRetrigger] = useState(false);

  const handleStart = () => {
  }

  const handleReset = () => {
    setRetrigger(!retrigger);
  }

  return (
    <div className={styles.root}>
      <HackTraceMemoized source={field} dataAttrName={dataAttr}/>
      <div className={styles.field}>
        <HackField className={styles.grid} source={field} setSelected={setSelected}>
          {field.map((arr, idxRow) => {
            return arr.map((hexValue, idxCol) => {
              return <HackFieldCell key={nanoid()} id={`${idxRow}-${idxCol}`} selected={selected} className={styles.cell} hex={hexValue}/>
            })
          })}
        </HackField>
      </div>
      <button className={styles.start} onClick={handleStart}>START GAME</button>
      <button className={styles.start} onClick={handleReset}>RESET GAME</button>
    </div>
  )
}

