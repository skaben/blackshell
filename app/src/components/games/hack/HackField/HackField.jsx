import React from 'react';
import { nanoid } from 'nanoid';
import styles from './styles.module.scss';

export const HackField = ({source, dataAttrName}) => {
  const rows = source.length;
  const cols = source[0].length;
  
  return (
    <div className={styles.root} style={{grid: `repeat(${rows}, auto) / repeat(${cols}, auto)`}}>
      {source.map((arr, idxRow) => {
        return arr.map((e, idxCol) => {
          const attrs = {
            [dataAttrName]: e,
            ['data-row']: idxRow + 1,
            ['data-col']: idxCol + 1
          }
          const elem = <div key={nanoid()}
                            {...attrs}
                            className={styles.cell}>{e}</div>;
          return elem;
        })
      })}
    </div> 
  )
}