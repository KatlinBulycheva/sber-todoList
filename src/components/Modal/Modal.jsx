import classNames from "classnames";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./modal.module.css";

function ModalInner({ closeHandler, children }) {
  useEffect(() => {
    const closeModalByEscape = (e) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    };

    document.addEventListener("keydown", closeModalByEscape);

    return () => {
      document.removeEventListener("keydown", closeModalByEscape);
    };
  }, []);

  const closeModalByClickButton = () => closeHandler();

  return (
    <div className={styles.modalInner}>
      <button
        type="button"
        onClick={closeModalByClickButton}
        className={classNames("btn", "btn-primary", 'btn-sm', styles.closeBtn)}
      >
        X
      </button>
      {children}
    </div>
  );
}

export function Modal({ isOpen, closeHandler, children }) {
  // console.log({ isOpen, closeHandler });

  if (!isOpen) return null;

  const closeModalByClickWripper = (e) => {
    if (e.target === e.currentTarget) {
      closeHandler();
    }
  };

  return createPortal(
    <div onMouseDown={closeModalByClickWripper} className={styles.modalWr}>
      <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
    </div>,
    document.getElementById("modal-root")
  );
}
