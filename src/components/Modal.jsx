import PropTypes from "prop-types";
import { forwardRef } from "react";
import styles from "./Modal.module.css";

// eslint-disable-next-line react/display-name
export const Modal = forwardRef(
  ({ text, buttonText, onClick, children }, ref) => {
    return (
      <dialog className={styles.modal} ref={ref}>
        <div className={styles.container}>
          <p>{text}</p>
          {children}
          <button onClick={onClick}>{buttonText}</button>
        </div>
      </dialog>
    );
  }
);

Modal.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
