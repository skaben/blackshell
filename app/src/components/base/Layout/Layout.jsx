import React from 'react';
// import classnames from 'classnames';
import styles from './styles.module.css';

export const Layout = ({header, main, footer}) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>{ header }</header>
      <main className={styles.main}>{ main }</main>
      <footer className={styles.footer}>{ footer }</footer>
    </div>
  )
}
