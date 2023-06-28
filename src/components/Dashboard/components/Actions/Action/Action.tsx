import React from 'react';
import * as styles from './Action.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Action = ({ title, icon, description }) => {
  return (
    <div className={styles.action}>
      <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};
