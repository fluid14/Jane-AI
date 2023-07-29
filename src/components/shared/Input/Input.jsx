import React from 'react';
import * as styles from './Input.module.sass';
import cs from 'classnames';

export const Input = ({
  className,
  label,
  type = 'text',
  textarea = false,
  autoresize = false,
  error,
  register = () => {},
  validationSchema,
  name,
  ...rest
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {!textarea && !autoresize && (
        <input
          {...register(name)}
          className={cs(styles.input, className)}
          type={type}
          name={name}
          {...register(name, validationSchema)}
          {...rest}
        />
      )}
      {textarea && (
        <textarea
          className={cs(styles.input, className)}
          name={name}
          {...register(name, validationSchema)}
          {...rest}
        />
      )}
      {error && <span>{error}</span>}
    </div>
  );
};
