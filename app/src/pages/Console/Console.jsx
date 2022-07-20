import React from 'react';
import {useReducer} from 'react';
import { Layout } from 'Components/base/Layout/Layout';
import { ConsoleInput } from 'Components/console/ConsoleInput/ConsoleInput';
import { ConsoleOutput } from 'Components/console/ConsoleOutput/ConsoleOutput';
import {Background} from 'Components/base/Background/Background';
import { RandomizeText } from 'Components/effects/RandomizeText/RandomizeText';
import styles from './styles.module.scss';


const reducer = (state, action) => {
  switch (action.type) {
    case 'append':
      return {rows: [...state.rows, action.stdout]};
    default:
      return {rows: state.rows};
  }
}


export const Console = () => {
  const [state, dispatch] = useReducer(reducer, {rows: []}); 
  const addStdoutRow = (value) => {
    dispatch({type: 'append', stdout: value});
  }

  return (
    <>
      <Layout className={styles.root}
        header={<RandomizeText value={'this is future console screen, work in progress'}/>}
        main={<ConsoleOutput rows={state.rows}/>}
        footer={<ConsoleInput submitInput={addStdoutRow}/>}
      ></Layout>
      <Background/>
    </>
  )
}
