import React from 'react';
import * as styles from './Action.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Action = () => {
  return (
    <div className={styles.action}>
      <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
      <p className={styles.text}>TailwindCSS</p>
    </div>
  );
};
