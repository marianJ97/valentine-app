import styles from "./Question.module.css";
import PropTypes from "prop-types";

export const Question = ({ onConfirm, onReject, rejectText, question }) => {
  return (
    <div>
      <p>{question}</p>
      <div className={styles.questions}>
        <span onClick={onConfirm}>Yes</span>
        <span onClick={onReject}>{rejectText ?? "No"}</span>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.string,
  onConfirm: PropTypes.func,
  onReject: PropTypes.func,
  rejectText: PropTypes.string,
};
