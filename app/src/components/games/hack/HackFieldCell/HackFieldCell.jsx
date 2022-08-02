import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

export const HackFieldCell = ({id, hex, className, selected = []}) => {
  return (
    <div className={classnames(styles.root, className, {
      [styles.highlighted]: selected.includes(id)
    })}><span>{hex}</span></div>
  )
}
