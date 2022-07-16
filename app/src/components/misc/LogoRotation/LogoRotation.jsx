import React from 'react'
import classnames from 'classnames';
import CircleImage from 'Assets/svg/hud.svg?url';
import styles from './styles.module.scss';

export const LogoRotation = ({className}) => {
  return (
    <svg className={classnames(styles.root, className)} viewBox="0 0 560 560">
      <use className={styles.outer} href={`${CircleImage}#outer`}></use>
      <use className={styles.mid} href={`${CircleImage}#mid`}></use>
      <use className={styles.inner} href={`${CircleImage}#inner`}></use>
    </svg>
  )
}
