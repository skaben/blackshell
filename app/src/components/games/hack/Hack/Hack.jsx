import React from 'react';
import {useState, useMemo} from 'react';
import { randomDecimal } from 'Helpers/misc.js';
import { HackTraceMemoized } from 'Components/games/hack/HackTrace/HackTrace.jsx';
import { HackField } from '../HackField/HackField';
import styles from './styles.module.scss';

const generateField = (height, width) => {
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(48, 72).toString(16)));
}

export const Hack = () => {
  const height = 8;
  const width = 12;
  const dataAttr = 'data-code';
  const [working, setWorking] = useState(false);
  const [retrigger, setRetrigger] = useState(false);
  const field = useMemo(() => generateField(height, width), [retrigger]);

  const handleStart = () => {
    setWorking(true);
  }

  const handleReset = () => {
    setRetrigger(!retrigger);
    setWorking(false);
  }

  return (
    <div className={styles.root}>
      <HackTraceMemoized source={field} dataAttrName={dataAttr}/>
      <HackField source={field} dataAttrName={dataAttr}/>
      <button className={styles.start} onClick={handleStart}>START GAME</button>
      <button className={styles.start} onClick={handleReset}>RESET GAME</button>
    </div>
  )
}

