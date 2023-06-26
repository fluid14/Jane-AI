import React from 'react';
import { useContext, useEffect } from 'react';
import { SettingsContext } from '../../context/settingsContext.jsx';
import { ActionItem } from './components/ActionItem/ActionItem.jsx';
import * as styles from './ActionsList.module.sass';
import { SectionHeader } from '../../../shared/text/SectionHeader/SectionHeader';
import { AddNewAction } from './components/AddNewAction/AddNewAction.jsx';

export const ActionsList = () => {
  const { actions, getActions } = useContext(SettingsContext);

  useEffect(() => {
    getActions();
  }, []);

  return (
    <>
      <SectionHeader>Actions</SectionHeader>
      <ul className={styles.actionList}>
        {actions?.map((data) => (
          <ActionItem key={data.record_id} data={data} />
        ))}
      </ul>
      <AddNewAction />
    </>
  );
};
