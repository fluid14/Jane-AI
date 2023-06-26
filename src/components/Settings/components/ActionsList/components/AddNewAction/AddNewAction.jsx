import React, { useContext } from 'react';
import * as style from './AddNewAction.module.sass';
import { Button } from '@/components/shared/Button/Button';
import useModal from '@/hooks/useModal';
import Modal from '@/components/shared/Modal/Modal';
import { EditActionItem } from '@/components/Settings/components/ActionsList/components/EditActionItem/EditActionItem';
import { SettingsContext } from '@/components/Settings/context/settingsContext';

export const AddNewAction = () => {
  const { isShowing: isShowingAddActionModal, toggle: toggleAddActionModal } = useModal();
  const { addAction } = useContext(SettingsContext);

  const addActionCallback = (recordId, payload) => {
    addAction(payload);
    toggleAddActionModal();
  };

  return (
    <>
      <div className={style.addNewActionWrap}>
        <Button type='primary' onClick={toggleAddActionModal}>
          Add new action
        </Button>
      </div>

      <Modal isShowing={isShowingAddActionModal} toggle={toggleAddActionModal} title='Add action'>
        <EditActionItem
          callback={addActionCallback}
          cancelAction={toggleAddActionModal}
          recordId={null}
        />
      </Modal>
    </>
  );
};
