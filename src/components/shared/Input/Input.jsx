import React from 'react';
import * as style from './Input.module.sass';
import cs from 'classnames';

export const Input = ({
  className,
  label,
  type = 'text',
  textarea = false,
  error,
  register,
  validationSchema,
  name,
  ...rest
}) => {
  return (
    <div className={style.inputWrapper}>
      <label className={style.label} htmlFor={name}>
        {label}
      </label>
      {!textarea && (
        <input
          {...register(name)}
          className={cs(style.input, className)}
          type={type}
          name={name}
          {...register(name, validationSchema)}
          {...rest}
        />
      )}
      {textarea && (
        <textarea
          className={cs(style.input, className)}
          name={name}
          {...register(name, validationSchema)}
          {...rest}
        />
      )}
      {error && <span>error</span>}
    </div>
  );
};
