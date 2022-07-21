import React from 'react';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import { useState } from 'react';
import BackgroundImage from 'Assets/svg/menuItem.svg';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText';
import styles from './styles.module.scss';

export const Button = ({text, scrambleRate, className, isAnimated=true, ...rootDOMAttributes}) => {
  const rate = scrambleRate || 500;
  const [trigger, setTrigger] = useState('default');

  return (
    <div className={classnames(className, styles.root)}
      onMouseEnter={() => {
        setTrigger(nanoid());
      }}
      {...rootDOMAttributes}
    >
      {
        // триггер полностью делает ремаунт, иначе некрасиво
        // todo: с id можно навесить другую анимацию (в другую сторону строки, с большим таймингом)
        isAnimated ? <RandomizeText key={trigger} value={text} className={styles.title} rate={rate}/>
                   : <span className={styles.title}>{text}</span>
      }
      <BackgroundImage className={styles.background}/>
    </div>
  )
}