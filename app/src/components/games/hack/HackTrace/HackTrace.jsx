import React from 'react';
import classnames from 'classnames';
import {nanoid} from 'nanoid';
import styles from './styles.module.scss';
import { randomDecimal } from 'Helpers/misc.js';

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

const HackTrace = ({className, source, len=4, dataAttrName=''}) => {
  const symbols = getBacktrace(source, len);

  const highlightTrace = (e, highlight) => {
    const hexCode = e.target.getAttribute('data-trace');
    const elements = document.querySelectorAll(`[${dataAttrName}='${hexCode}']`);
    elements.forEach(e => e.style.backgroundColor = highlight ? 'rgba(var(--color-danger-val), .3)' : 'transparent');
  }

  return (
    <div className={classnames(styles.root, className)}>
      {symbols.map((hex, idx) => <div className={styles.symbol}
                                      tabIndex={idx + 1}
                                      data-trace={hex}
                                      key={nanoid()}
                                      onMouseEnter={(e) => highlightTrace(e, true)}
                                      onFocus={(e) => highlightTrace(e, true)}
                                      onMouseLeave={(e) => highlightTrace(e, false)}
                                      onBlur={(e) => highlightTrace(e, false)}
                                      >{hex}</div>)}
    </div>
  )
}

const HackTraceMemoized = React.memo(HackTrace);
export { HackTrace, HackTraceMemoized };