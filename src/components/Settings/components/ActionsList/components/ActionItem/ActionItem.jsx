import React, { useContext } from 'react';
import * as styles from './ActionItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/shared/Button/Button';
import Modal from '@/components/shared/Modal/Modal.jsx';
import useModal from '@/hooks/useModal.jsx';
import { EditActionItem } from '../EditActionItem/EditActionItem.jsx';
import ConfirmModal from '@/components/shared/Modals/ConfirmModal/ConfirmModal';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { ActionsContext } from '@/context/actionsContext';

export const ActionItem = ({
  data: { title, icon, userDescription, record_id, description, shortcut, tags },
}) => {
  const { isShowing: isShowingEditModal, toggle: toggleEditModal } = useModal();
  const { isShowing: isShowingRemoveModal, toggle: toggleRemoveModal } = useModal();
  const { deleteActions, updateAction } = useContext(ActionsContext);

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
      <li className={styles.actionItem}>
        <p className={styles.title}>{title}</p>
        <div className={styles.buttonsWrap}>
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
          icon={icon}
          prompt={description}
          userDescription={userDescription}
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
