import React, { useContext } from 'react';
import * as style from './ActionItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/shared/Button/Button';
import Modal from '@/components/shared/Modal/Modal.jsx';
import useModal from '@/hooks/useModal.jsx';
import { EditActionItem } from '../EditActionItem/EditActionItem.jsx';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { SettingsContext } from '@/components/Settings/context/settingsContext';
import ConfirmModal from '@/components/shared/Modals/ConfirmModal/ConfirmModal';

export const ActionItem = ({ data: { title, record_id, description, shortcut, tags } }) => {
  const { isShowing: isShowingEditModal, toggle: toggleEditModal } = useModal();
  const { isShowing: isShowingRemoveModal, toggle: toggleRemoveModal } = useModal();
  const { deleteActions } = useContext(SettingsContext);
  console.log(record_id);

  const confirmCancelAction = () => {
    deleteActions(record_id);
    toggleRemoveModal();
  };

  return (
    <li className={style.actionItem}>
      <p className={style.title}>{title}</p>
      <div className={style.buttonsWrap}>
        <Button onClick={toggleEditModal}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button danger onClick={toggleRemoveModal}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      </div>
      <Modal isShowing={isShowingEditModal} toggle={toggleEditModal} title='Edit'>
        <EditActionItem
          title={title}
          prompt={description}
          shortcut={shortcut}
          tags={tags}
          recordId={record_id}
        />
      </Modal>
      <Modal isShowing={isShowingRemoveModal} toggle={toggleRemoveModal}>
        <ConfirmModal
          text={`Do you wanna remove ${title} action ?`}
          confirmAction={confirmCancelAction}
          cancelAction={toggleRemoveModal}
        />
      </Modal>
    </li>
  );
};
