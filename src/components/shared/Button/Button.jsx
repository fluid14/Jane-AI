import React from 'react';
import * as styles from './Button.module.sass';
import cs from 'classnames';

export const Button = ({ children, danger = false, className = null, ...rest }) => {
  return (
    <>
      <button {...rest} className={cs(className, styles.btn, { [styles.danger]: danger })}>
        {children}
      </button>
    </>
  );
};
