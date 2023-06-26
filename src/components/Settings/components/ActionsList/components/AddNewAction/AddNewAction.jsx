import React from 'react';
import * as style from './AddNewAction.module.sass';
import { Button } from '@/components/shared/Button/Button';
import useModal from '@/hooks/useModal';
import Modal from '@/components/shared/Modal/Modal';
import { EditActionItem } from '@/components/Settings/components/ActionsList/components/EditActionItem/EditActionItem';

export const AddNewAction = () => {
  const { isShowing: isShowingAddActionModal, toggle: toggleAddActionModal } = useModal();

  const addActionCallback = () => {};

  return (
    <>
      <div className={style.addNewActionWrap}>
        <Button type='primary' onClick={toggleAddActionModal}>
          Add new action
        </Button>
      </div>

      <Modal isShowing={isShowingAddActionModal} toggle={toggleAddActionModal} title='Add action'>
        <EditActionItem
          callback={toggleAddActionModal}
          cancelAction={toggleAddActionModal}
          recordId={null}
        />
      </Modal>
    </>
  );
};
