import React from 'react';
import * as styles from './ConfirmModal.module.sass';
import { Button } from '@/components/shared/Button/Button';

export default function ConfirmModal({
  text = '',
  confirmAction = () => {},
  cancelAction = () => {},
}) {
  return (
    <div className={styles.confirmModalWrap}>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttonsWrap}>
        <Button onClick={confirmAction}>Confirm</Button>
        <Button danger onClick={cancelAction}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
