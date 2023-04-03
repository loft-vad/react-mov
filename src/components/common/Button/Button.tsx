import React from 'react';
import styles from './Button.module.scss';

function Button({ text = '', callBack = () => {} }) {
  return (
    <button className={styles.button} onClick={callBack}>
      {text}
    </button>
  );
}

export default Button;
