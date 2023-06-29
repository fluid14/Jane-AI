import React, { useContext } from 'react';
import * as styles from './Action.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionsContext } from '@/context/actionsContext';

export const Action = ({ data: { title, icon, description: prompt, userDescription, url } }) => {
  const { setActiveAction, toggleActionsList } = useContext(ActionsContext);

  const handleActionClick = () => {
    setActiveAction({ prompt, url, title });
    toggleActionsList();
  };

  return (
    <div className={styles.action} onClick={handleActionClick}>
      <div className={styles.titleWrap}>
        {icon && <FontAwesomeIcon className={styles.icon} icon={['fas', icon]} />}
        <p className={styles.title}>{title}</p>
      </div>
      <p className={styles.description}>{userDescription}</p>
    </div>
  );
};
