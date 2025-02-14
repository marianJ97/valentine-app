import PropTypes from "prop-types";
import styles from "./Title.module.css";

export const Title = ({ title, text }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>💕 {title} 💕</h3>
      <p className={styles.desc}>{text}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
