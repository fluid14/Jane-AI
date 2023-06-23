import React from 'react';
import * as style from './ConfirmModal.module.sass';
import { Button } from '@/components/shared/Button/Button';

export default function ConfirmModal({
  text = '',
  confirmAction = () => {},
  cancelAction = () => {},
}) {
  return (
    <div className={style.confirmModalWrap}>
      <p className={style.text}>{text}</p>
      <div className={style.buttonsWrap}>
        <Button onClick={confirmAction}>Confirm</Button>
        <Button danger onClick={cancelAction}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
