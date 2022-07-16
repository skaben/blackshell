import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import Bevel from './Bevel.jsx';

export const Background = ({ className }) => {
  return (
    <div className={classnames(styles.root, className)}>
      <Bevel className={styles.bevel}/> {/* todo: вот эту дичь надо переписать на нормальный SVG */}
      <div className={styles.animated}></div>
      <div className={styles.textured}></div>
    </div>
  )
}
