import React from 'react';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { getUsers } from 'Features/modes/selectors';
import { LoginBox } from 'Components/login/LoginBox/LoginBox.jsx';
import { Button } from 'Components/base/Button/Button';
import useComponentVisible from 'Helpers/useComponentVisible.js';
import styles from './styles.module.scss';

export const Login = ({ className }) => {
  const users = getUsers();
  const [ currentUser, setCurrentUser ] = useState('');
  const [ ref, isComponentVisible, setIsComponentVisible ] = useComponentVisible(false);

  useEffect(() => { 
    if (currentUser !== '') {
      setIsComponentVisible(true)
    }
  }, [currentUser])

  useEffect(() => {
    if (!isComponentVisible) {
      setCurrentUser('');
    }
  }, [isComponentVisible])

  const handleClick = (username) => {
    if (currentUser !== username) {
      setCurrentUser(username);
    }
  }

  return (
    <div className={classnames(styles.root, className)}>
      <div>
        <div className={styles.users}>
          {Object.entries(users).map(([username, data], idx) => {
            return <Button key={username}
                           text={data?.name || 'unknown user'}
                           tabIndex={idx + 1}
                           className={classnames(styles.row, {[styles.hacked]: data.hacked})}
                           onClick={() => handleClick(username)}/>
          })}
        </div>
      </div>
      {isComponentVisible && users?.[currentUser] &&
        <div ref={ref} className={styles.login}>
          <LoginBox username={currentUser} userdata={users?.[currentUser]}/>
        </div>
      }
    </div>
  )
}
