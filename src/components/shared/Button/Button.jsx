import React from 'react';
import * as style from './Button.module.sass';
import cs from 'classnames';

export const Button = ({ children, danger = false, className = null, ...rest }) => {
  return (
    <>
      <button {...rest} className={cs(className, style.btn, { [style.danger]: danger })}>
        {children}
      </button>
    </>
  );
};
