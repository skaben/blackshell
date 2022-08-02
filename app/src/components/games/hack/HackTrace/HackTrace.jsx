import React from 'react';
import {useContext} from 'react';
import classnames from 'classnames';
import {nanoid} from 'nanoid';
import styles from './styles.module.scss';
import { randomDecimal } from 'Helpers/misc.js';
import { HackContext } from '../context';
import { HackTraceCell } from '../HackTraceCell/HackTraceCell';

const getPrevious = (index, maxVal) => {
  const result = randomDecimal(0, maxVal);
  return result === index ? getPrevious(index, maxVal) : result;
}

const getBacktrace = (arr, pathLength) => {
  // создает список координат ячеек, которые будут являться решением игры
  const maxHeight = arr.length - 1;
  const maxWidth = arr[0].length - 1;
  const trace = [...Array(pathLength)].reduce((accum, arr, idx) => {
    const last = accum[0] || [randomDecimal(0, maxHeight), randomDecimal(0, maxWidth)];
    const newVal = idx % 2 > 0 ? [getPrevious(last[0], maxHeight), last[1]] : [last[0], getPrevious(last[1], maxWidth)];
    accum.unshift(newVal);
    return accum;                                                           
  }, []);

  return trace.map(p => {
    const [row, col] = [...p];
    return arr[row][col];
  });
}

const Trace = ({source, len, className}) => {
  const symbols = getBacktrace(source, len);

  return (
    <div className={classnames(styles.root, className)}>
      {symbols.map((hexCode, idx) => <HackTraceCell key={nanoid()} hexCode={hexCode} index={idx}/>)}
    </div>
  )
}

const HackTrace = React.memo(Trace);
export { HackTrace };