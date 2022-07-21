import React from 'react';
import { Background } from "Components/base/Background/Background";
import { Layout } from 'Components/base/Layout/Layout';
import { Menu } from 'Components/menu/Menu/Menu';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText';
import { getMenu } from 'Features/modes/selectors';
import styles from './styles.module.scss';

export const MenuPage = () => {

  const menuItems = getMenu();

  return (
    <Layout 
      className={styles.root}
      header={<RandomizeText className={styles.header} value={"this is main menu"}></RandomizeText>}
      main={
        <div className={styles.main}>
          <Menu items={menuItems} className={styles.menu}/>
        </div>
      }
      footer={<RandomizeText className={styles.footer} value={"this is screen where all routing should happens"}></RandomizeText>}
      background={<Background/>}
    />
  )
}
