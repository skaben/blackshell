import React from 'react';
import styles from './styles.module.css';
import Bevel from 'Assets/svg/Bevel';

export const Background = () => {
  return (
    <div className={styles.root}>
      <Bevel className={styles.bevel}/>
      <div className={styles.animated}></div>
      <div className={styles.textured}></div>
    </div>
  )
}
