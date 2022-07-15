import React from 'react';
import styles from './styles.module.css';
import classnames from 'classnames';
import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = ({ items, className }) => {
  return (
    <nav className={classnames(className, styles.root)}>
        {items.map(item => {
          return (
            <>
              <div className={styles.connection}></div>
              <MenuItem {...item}/>
            </>
          )
        })}
    </nav>
  )
}
