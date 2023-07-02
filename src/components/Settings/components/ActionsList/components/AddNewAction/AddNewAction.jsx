import React, { useContext } from 'react';
import * as styles from './AddNewAction.module.sass';
import { Button } from '../../../../../shared/Button/Button';
import useModal from '../../../../../../hooks/useModal';
import Modal from '../../../../../shared/Modal/Modal';
import { EditActionItem } from '../EditActionItem/EditActionItem';
import { ActionsContext } from '../../../../../../context/actionsContext';

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
