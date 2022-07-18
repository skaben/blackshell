import React from 'react';
import styles from './styles.module.scss';

export const ConsoleOutput = ({rows}) => {
  return (
    <div className={styles.root}>
      {rows?.length ? rows.map(r => <p>{r}</p>) : ""}
    </div>
  )
}
