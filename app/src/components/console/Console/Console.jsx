import React from 'react';
import classnames from 'classnames';
import { ConsoleInput } from '../ConsoleInput/ConsoleInput';
import { ConsoleOutput } from '../ConsoleOutput/ConsoleOutput';
import styles from './styles.module.scss';

export const Console = ({className}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <div className={styles.output}></div>
      <div className={styles.input}></div>
    </div>
  )
}
