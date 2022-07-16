import React from 'react';
import classnames from 'classnames';
import { nanoid } from 'nanoid';
import { MenuItem } from '../MenuItem/MenuItem';
import styles from './styles.module.scss';

export const Menu = ({ items, className }) => {
  return (
    <nav className={classnames(className, styles.root)}>
        {items.map(item => {
          return (
            <MenuItem key={nanoid()} {...item}/>
          )
        })}
    </nav>
  )
}
