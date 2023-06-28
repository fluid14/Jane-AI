import React from 'react';
import * as styles from './ActionsWrap.module.sass';
import { useState } from 'react';
import cs from 'classnames';
import { Action } from '@/components/Dashboard/components/Actions/Action/Action';

export const ActionsWrap = () => {
  const data = {
    icon: 'coffee',
    title: 'TailwindCSS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div className={styles.actionsWrap}>
      <div className={cs(styles.actionsPills)}>
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
        <Action data={data} />
      </div>
    </div>
  );
};
