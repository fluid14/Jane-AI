import React from 'react';
import * as styles from './ActionsWrap.module.sass';
import { useState } from 'react';
import cs from 'classnames';
import { Action } from '@/components/Dashboard/components/Actions/Action/Action';

export const ActionsWrap = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => setOpened(!opened);

  const data = {
    icon: 'faCartShopping',
    title: 'TailwindCSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className={styles.actionsWrap}>
      <div className={cs(styles.actionsPills, { [styles.active]: opened })}>
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
      </div>
      <button className={styles.openActions} onClick={handleOpen}>
        actions
      </button>
    </div>
  );
};
