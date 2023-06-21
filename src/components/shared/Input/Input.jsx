import React from 'react';
import * as style from './Input.module.sass';
import cs from 'classnames';

export const Input = ({
  className,
  label,
  type = 'text',
  name,
  textarea = false,
  error,
  ...rest
}) => {
  return (
    <div className={style.inputWrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      {!textarea && (
        <input {...rest} className={cs(style.input, className)} type={type} name={name} />
      )}
      {textarea && <textarea {...rest} className={cs(style.input, className)} name={name} />}
      {error && <span>error</span>}
    </div>
  );
};
