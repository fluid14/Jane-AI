import React, { useEffect } from 'react';
import * as styles from './Action.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Action = ({ data: { title, icon, description } }) => {
  return (
    <div className={styles.action}>
      <div className={styles.titleWrap}>
        {icon && <FontAwesomeIcon className={styles.icon} icon={['fas', icon]} />}
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
