import React from 'react';
import { Layout } from 'Components/base/Layout/Layout';
import { Login } from 'Components/login/Login/Login';
import { Background } from 'Components/base/Background/Background';
import styles from './styles.module.scss';

export const Online = () => {
  return (
    <Layout
      main={<Login/>}
      background={<Background/>}
    />
  )
}
