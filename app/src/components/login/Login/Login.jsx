import React from 'react';
import { useState } from 'react';
import classnames from 'classnames';
import { getUsers } from 'Features/modes/selectors';
import { LoginBox } from 'Components/login/LoginBox/LoginBox.jsx';
import { Button } from 'Components/base/Button/Button';
import styles from './styles.module.scss';

export const Login = ({ className }) => {
  const users = getUsers();
  const [currentUser, setCurrentUser] = useState('');
  const handleSelect = (userName) => {
    return setCurrentUser(userName);
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div>
        <div className={styles.users}>
          {Object.entries(users).map(([username, data]) => {
            return <Button key={username} text={data?.name || 'unknown user'} 
                           className={classnames(styles.row, {[styles.hacked]: data.hacked})}
                           onClick={() => handleSelect(username)}/>
          })}
        </div>
      </div>
      <div className={styles.login}>
        <LoginBox {...users?.[currentUser]}/>
      </div>
    </div>
  )
}
