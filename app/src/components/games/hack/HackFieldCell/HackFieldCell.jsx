import React from 'react';
import {useContext} from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { HackContext } from '../context';

export const HackFieldCell = ({hex, pos='', className}) => {
  const [state, dispatch] = useContext(HackContext);
  const convertCoords = (coords) => coords.join(":");
  
  return (
    <div className={classnames(styles.root, className, {
      [styles.highlighted]: state.highlighted.map(convertCoords).includes(pos),
      [styles.selected]: state.selected.map(convertCoords).includes(pos)
    })}><span>{hex}</span></div>
  )
}
