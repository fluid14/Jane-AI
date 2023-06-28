import React, { useContext } from 'react';
import * as style from './ActionItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/shared/Button/Button';
import Modal from '@/components/shared/Modal/Modal.jsx';
import useModal from '@/hooks/useModal.jsx';
import { EditActionItem } from '../EditActionItem/EditActionItem.jsx';
import { SettingsContext } from '@/components/Settings/context/settingsContext';
import ConfirmModal from '@/components/shared/Modals/ConfirmModal/ConfirmModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export const ActionItem = ({
  data: { title, user_description: userDescription, record_id, description, shortcut, tags },
}) => {
  const { isShowing: isShowingEditModal, toggle: toggleEditModal } = useModal();
  const { isShowing: isShowingRemoveModal, toggle: toggleRemoveModal } = useModal();
  const { deleteActions } = useContext(SettingsContext);
  const { updateAction } = useContext(SettingsContext);

  const confirmCancelAction = () => {
    deleteActions(record_id);
    toggleRemoveModal();
  };

  const editActionCallback = (recordId, payload) => {
    updateAction(recordId, payload);
    toggleEditModal();
  };

  return (
    <>
      <li className={style.actionItem}>
        <p className={style.title}>{title}</p>
        <div className={style.buttonsWrap}>
          <Button onClick={toggleEditModal}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
          <Button danger onClick={toggleRemoveModal}>
            <FontAwesomeIcon icon={faTrashCan} />
          </Button>
        </div>
      </li>

      <Modal isShowing={isShowingEditModal} toggle={toggleEditModal} title='Edit action'>
        <EditActionItem
          title={title}
          prompt={description}
          description={userDescription}
          shortcut={shortcut}
          tags={tags}
          recordId={record_id}
          callback={editActionCallback}
          cancelAction={toggleEditModal}
        />
      </Modal>
      <Modal isShowing={isShowingRemoveModal} toggle={toggleRemoveModal}>
        <ConfirmModal
          text={`Do you wanna remove ${title} action ?`}
          confirmAction={confirmCancelAction}
          cancelAction={toggleRemoveModal}
        />
      </Modal>
    </>
  );
};
