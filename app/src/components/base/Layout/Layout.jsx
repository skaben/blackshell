import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const Layout = ({header, main, footer, className}) => {
  return (
    <div className={classnames(styles.root, className)}>
      <header className={styles.header}>{ header }</header>
      <main className={styles.main}>{ main }</main>
      <footer className={styles.footer}>{ footer }</footer>
    </div>
  )
}
