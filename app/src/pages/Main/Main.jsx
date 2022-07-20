import React from 'react';
import { Background } from "Components/base/Background/Background";
import { Layout } from 'Components/base/Layout/Layout';
import { Menu } from 'Components/menu/Menu/Menu';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText';
import styles from './styles.module.scss';


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
        className={styles.content}
        header={<RandomizeText value={"this is main menu"}></RandomizeText>}
        main={
          <div className={styles.main}>
            <Menu items={testItems} className={styles.menu}/>
          </div>
        }
        footer={<RandomizeText value={"this is screen where all routing should happens"}></RandomizeText>}
      />
      <Background/>
    </div>
  )
}
