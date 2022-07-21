import React from 'react';
import gridImage from 'Assets/img/grid.png';
import { getTitles } from 'Features/modes/selectors.js';
import { Login } from 'Components/login/Login/Login.jsx';
import { Layout } from 'Components/base/Layout/Layout.jsx';
import { Background } from 'Components/base/Background/Background.jsx';
import styles from './styles.module.scss';

export const LoginPage = () => {

  const titles = getTitles();
  const {header, footer} = titles?.login || titles.default;

  return (
    <Layout
      header={<p className={styles.header}>{header}</p>}
      main={<Login className={styles.main}/>}
      footer={<p className={styles.footer}>{footer}</p>}
      background={<Background textureUrl={gridImage} textureOpacity={0.05}/>}
    />
  )
}
