import React from 'react';
import { createPortal } from 'react-dom';
import * as style from './Modal.module.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({ isShowing, toggle, title, children = null }) =>
  isShowing
    ? createPortal(
        <>
          <div className={style.modalOverlay} />
          <div className={style.modalWrapper} aria-modal aria-hidden tabIndex={-1} role='dialog'>
            <div className={style.modalHeader}>
              {title && <h2 className={style.modalTitle}>{title}</h2>}
              <button
                type='button'
                className={style.modalCloseButton}
                data-dismiss='modal'
                aria-label='Close'
                onClick={toggle}
              >
                <FontAwesomeIcon icon='fa-solid fa-xmark' />
              </button>
            </div>
            <div className={style.modalBody}>{children}</div>
          </div>
        </>,
        document.body,
      )
    : null;

export default Modal;
