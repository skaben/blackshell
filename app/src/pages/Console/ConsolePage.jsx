import React from 'react';
import { Layout } from 'Components/base/Layout/Layout';
import { Console } from 'Components/console/Console/Console';
import {Background} from 'Components/base/Background/Background';
import styles from './styles.module.scss';

export const ConsolePage = () => {
  return (
    <>
      <Layout className={styles.root}
        main={<Console/>}
      ></Layout>
      <Background/>
    </>
  )
}
