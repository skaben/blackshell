import React from 'react';
import {useState} from 'react';
import styles from './styles.module.scss';

export const ConsoleInput = ({ submitInput }) => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    setValue(event.target.value);
  }

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitInput(value);
      setValue("");
    }
  }

  return (
    <div className={styles.root}>
      <form className={styles.stdin} onKeyDown={onKeyDownHandler}>
          <label htmlFor="stdin" className={styles.label}>{"$>"}</label>
          <input name="stdin"
                 type="text"
                 autoFocus
                 value={value}
                 className={styles.input}
                 onChange={handleInput}/>
      </form>
      <button className={styles.submit} onClick={() => {
        submitInput(value);
        setValue("");
      }}>{"send"}</button>
    </div>
  )
}
