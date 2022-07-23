import React from 'react';
import classnames from 'classnames';
import NetworkSvg from 'Assets/svg/network.svg';
import styles from './styles.module.scss';
import { Button } from 'Components/base/Button/Button.jsx';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText.jsx';

export const LoginBox = ({ username, userdata={} }) => {

  const animateRate = 300;
  const headerLabel = 'login attempt';
  const passwordLabel = 'password';
  const { name, hacked } = {...userdata};

  return (
    <div className={classnames(styles.root, {[styles.hacked]: hacked})}>
      <div className={classnames(styles.header, styles.label)}>
        <RandomizeText value={`/// ${headerLabel} : ${username} // ${hacked ? 'compromised' : 'secure'}`} rate={animateRate}/>
      </div>
      <div className={styles.details}>
        <NetworkSvg className={styles.logo}/>
        <div className={classnames(styles.row, styles.title)}>
          <span className={styles.label}>user account:</span>
          <span className={styles.title__name}>{name}</span>
        </div>
        <div className={classnames(styles.row, styles.password)}>
          <span className={styles.label}>password:</span>
          <input type="password" autoFocus></input>
        </div>
        <div className={styles.controls}>
          <div className={styles.control}><span>RECOVERY</span></div>
          <div className={styles.control}><span>SUBMIT</span></div>
        </div>
      </div>
    </div>
  )
}
