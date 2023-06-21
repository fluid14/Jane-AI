import React from 'react';
import * as style from './ActionItem.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@/components/shared/Button/Button';
import Modal from '@/components/shared/Modal/Modal.jsx';
import useModal from '@/hooks/useModal.jsx';
import { EditActionItem } from '../EditActionItem/EditActionItem.jsx';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const ActionItem = ({ data: { title } }) => {
  const { isShowing, toggle } = useModal();

  return (
    <li className={style.actionItem}>
      <p className={style.title}>{title}</p>
      <div className={style.btnsWrap}>
        <Button onClick={toggle}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
        <Button danger>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      </div>
      <Modal isShowing={isShowing} toggle={toggle} title='Edit'>
        <EditActionItem />
      </Modal>
    </li>
  );
};
