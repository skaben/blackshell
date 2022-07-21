import React from 'react';
import { useState } from 'react';
import { Button } from 'Components/base/Button/Button';
import styles from './styles.module.scss';

export const MenuItem = ({type, value, text, timer, locked, delay}) => {
  const [key, setKey] = useState('default');

  return (
    <Button text={text}/>
  )
}
