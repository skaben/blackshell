import React from 'react';
import styles from './styles.module.scss';
import { Layout } from 'Components/base/Layout/Layout';

export const PowerOff = () => {
  return (
    <Layout
      header={<p>state: power off</p>}
    />
  )
}
