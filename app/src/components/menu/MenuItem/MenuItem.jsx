import React from 'react';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import BackgroundImage from 'Assets/svg/menuItem.svg';
import { RandomizeText } from '../../effects/RandomizeText/RandomizeText';
import styles from './styles.module.scss';

export const MenuItem = ({type, value, text, timer, locked, delay}) => {
  const scrambleRate = 500;
  const [key, setKey] = useState('default')

  return (
    <div className={styles.root}
      onMouseEnter={() => {
        setKey(nanoid());
      }}
    >
      <RandomizeText key={key} value={text} className={styles.title} rate={scrambleRate}/>
      <BackgroundImage className={styles.background}/>
    </div>
  )
}
