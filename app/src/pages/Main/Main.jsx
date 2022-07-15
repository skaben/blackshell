import React from 'react';
import { Background } from "Components/base/Background/Background";
import { Layout } from 'Components/base/Layout/Layout';
import { Menu } from 'Components/menu/Menu/Menu';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText';
import logo from 'Assets/img/hud.png';
import styles from './styles.module.css';


const testItems = [
  {
      "type": "console",
      "text": "открыть консоль",
      "timer": 0,
      "locked": true
  },
  {
      "type": "text",
      "text": "прочитать игровой документ",
      "timer": 0,
      "value": "это короткий текст"
  },
  {
    "type": "console",
    "text": "открыть консоль",
    "timer": 0,
    "locked": true
  },
  {
      "type": "text",
      "text": "прочитать игровой документ",
      "timer": 0,
      "value": "это короткий текст"
  },
]

export const Main = () => {
  return (
    <div className={styles.root}>
      <Layout 
        header={<RandomizeText value={"this is main menu"}></RandomizeText>}
        main={
          <div className={styles.main}>
            <Menu items={testItems} className={styles.menu}/>
            <div className={styles.logo} style={{backgroundImage: `url(${logo})`}}></div>
          </div>
        }
        footer={<RandomizeText value={"this is screen where all routing should happens"}></RandomizeText>}
      />
      <Background/>
    </div>
  )
}
