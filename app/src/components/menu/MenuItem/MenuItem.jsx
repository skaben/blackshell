import React from 'react';
import styles from './styles.module.css';
import BackgroundImage from 'Assets/svg/menuItem.svg';
import { RandomizeText } from '../../effects/RandomizeText/RandomizeText';

export const MenuItem = ({type, value, text, timer, locked, delay}) => {
  return (
    <div className={styles.root}>
      <RandomizeText value={text} className={styles.title} rate={800}/>
      <BackgroundImage className={styles.background}/>
    </div>
  )
}
