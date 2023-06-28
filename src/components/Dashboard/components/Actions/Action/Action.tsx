import React, { useEffect } from 'react';
import * as styles from './Action.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Action = ({ data: { title, icon, description } }) => {
  return (
    <div className={styles.action}>
      <FontAwesomeIcon className={styles.icon} icon={['fas', icon]} />
      <div className={styles.descriptionWrap}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
