import React from 'react';
import classnames from 'classnames';
import NetworkSvg from 'Assets/svg/network.svg';
import styles from './styles.module.scss';

export const LoginBox = ({ username, userdata={}, visible=false }) => {

  const { name, hacked } = {...userdata};
  const headerLabel = 'login attempt';
  const passwordLabel = 'password';

  return (
    <div className={classnames(styles.root, {[styles.hacked]: hacked})}>
      <div className={classnames(styles.header, styles.label)}>
        <span>/// {headerLabel} : {username} // {hacked ? 'compromised' : 'secure'}</span>
        <span>---</span>
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
      </div>
    </div>
  )
}
