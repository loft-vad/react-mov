import React from "react";
import styles from "./Dialog.module.css";
import FocusTrap from "focus-trap-react";
import Button from "../Button/Button";

export interface ModalProps {
  title?: string;
  children?: React.ReactElement;
  onClose: () => void;
  onSubmit?: () => void;
  type?: "confirm";
  text?: string;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  title = "",
  children = "",
  type,
  onSubmit = () => {},
  text,
}) => {
  return (
    <FocusTrap
      focusTrapOptions={{
        fallbackFocus: "#close",
      }}
    >
      <div className={styles.wrapper}>
        <div>
          <div className={styles.dialogHeader}>
            <h1>{title}</h1>
            <div>
              <button id="close" onClick={onClose} className={styles.closeBtn}></button>
            </div>
          </div>
          {text && text}
          {children && <div className={styles.dialogContent}>{children}</div>}
          {type === "confirm" && (
            <div className={styles.dialogActions}>
              <Button text="Confirm" type="submit" callBack={() => onSubmit()} />
            </div>
          )}
        </div>
      </div>
    </FocusTrap>
  );
};

export default Modal;
