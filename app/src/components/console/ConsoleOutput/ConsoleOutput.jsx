import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const ConsoleOutput = ({rows, className}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.output}>
        {rows?.length ? rows.map(r => <p>{r}</p>) : ""}
      </div>
      <div className={styles.input}></div>
    </div>
  )
}
