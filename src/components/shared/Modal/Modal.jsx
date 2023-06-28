import React from 'react';
import { createPortal } from 'react-dom';
import * as styles from './Modal.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isShowing, toggle, title, children = null }) =>
  isShowing
    ? createPortal(
        <>
          <div className={styles.modalOverlay} />
          <div className={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role='dialog'>
            <div className={styles.modalHeader}>
              {title && <h2 className={styles.modalTitle}>{title}</h2>}
              <button
                type='button'
                className={styles.modalCloseButton}
                data-dismiss='modal'
                aria-label='Close'
                onClick={toggle}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className={styles.modalBody}>{children}</div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Modal;
