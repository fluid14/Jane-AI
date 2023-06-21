import React from 'react';
import * as styles from './ActionsWrap.module.sass';
import { useState } from 'react';
import cs from 'classnames';
import { Action } from '@/components/Dashboard/components/Actions/Action/Action';

export const ActionsWrap = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(!opened);

  return (
    <div className={styles.actionsWrap}>
      <div className={cs(styles.actionsPills, { [styles.active]: opened })}>
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
        <Action />
      </div>
      <button className={styles.openActions} onClick={handleOpen}>
        actions
      </button>
    </div>
  );
};
