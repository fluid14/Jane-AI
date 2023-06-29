import React, { useContext } from 'react';
import * as styles from './AddNewAction.module.sass';
import { Button } from '@/components/shared/Button/Button';
import useModal from '@/hooks/useModal';
import Modal from '@/components/shared/Modal/Modal';
import { EditActionItem } from '@/components/Settings/components/ActionsList/components/EditActionItem/EditActionItem';
import { ActionsContext } from '@/context/actionsContext';

export const AddNewAction = () => {
  const { isShowing: isShowingAddActionModal, toggle: toggleAddActionModal } = useModal();
  const { addAction } = useContext(ActionsContext);

  const addActionCallback = (recordId, payload) => {
    addAction(payload);
    toggleAddActionModal();
  };

  return (
    <>
      <div className={styles.addNewActionWrap}>
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
