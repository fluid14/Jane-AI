import React, { useContext, useEffect } from 'react';
import * as styles from './ActionsList.module.sass';
import cs from 'classnames';
import { Action } from './components/Action/Action';
import { ActionsContext } from '../../../../context/actionsContext';

export const ActionsList = () => {
  const { actions, getActions, actionsListState } = useContext(ActionsContext);

  useEffect(() => {
    getActions();
  }, []);

  return (
    <div className={cs(styles.actionsWrap, { [styles.active]: actionsListState })}>
      <div className={styles.actionsPills}>
        {/*{actions && actions?.map((data) => <Action key={data?.record_id} data={data} />)}*/}
      </div>
    </div>
  );
};
