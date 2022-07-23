import React from 'react';
import { nanoid } from 'nanoid';
import { randomDecimal } from 'Helpers/misc.js';
import styles from './styles.module.scss';

const generateField = (height, width) => {
  return [...Array(height)].map(() => [...Array(width)].map(() => randomDecimal(16, 32).toString(16)));
}

const getPrev = (index, maxVal) => {
  const result = randomDecimal(0, maxVal);
  return result === index ? getPrev(index, maxVal) : result;
} 

const getTrace = (arr, pathLength) => {
  const maxHeight = arr.length - 1;
  const maxWidth = arr[0].length - 1;
  const trace = [...Array(pathLength)].reduce((accum, arr, idx) => {
    const last = accum[0] || [randomDecimal(0, maxHeight), randomDecimal(0, maxWidth)];
    const newVal = idx % 2 > 0 ? [getPrev(last[0], maxHeight), last[1]] : [last[0], getPrev(last[1], maxWidth)];
    accum.unshift(newVal);
    return accum;                                                           
  }, []);

  return trace.map(p => {
    const [row, col] = [...p];
    return arr[row][col];
  });
}

export const HackGame = () => {
  const height = 8;
  const width = 12;
  const field = generateField(height, width);
  const trace = getTrace(field, 4);

  return (
    <div className={styles.root}>
      <span className={styles.trace}>{trace.join(' ')}</span>
      <div className={styles.field} style={{grid: `repeat(${height}, auto) / repeat(${width}, auto)`}}>
        {field.map(arr => {
          return arr.map(e => {
            const elem = <div key={nanoid()} data-code={e} className={styles.cell}>{e}</div>;
            return elem;
          })
        })}
      </div>
    </div>
  )
}

