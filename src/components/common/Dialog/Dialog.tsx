import React from "react";
import styles from "./Dialog.module.scss";
import FocusTrap from "focus-trap-react";

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose, title = "", children = "" }) => {
  return (
    <FocusTrap>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.dialogHeader}>
            <h1>{title}</h1>
            <div>
              <button onClick={onClose} className={styles.closeBtn}></button>
            </div>
          </div>
          {children && <div className={styles.dialogContent}>{children}</div>}
        </div>
      </div>
    </FocusTrap>
  );
};

export default Modal;
