import PropTypes from "prop-types";
import styles from "./Options.module.css";

export const Options = ({ options, onSelect, active, question }) => {
  console.log("OPTIONS", options);
  return (
    <div>
      <p>{question}</p>
      <div className={styles.questions}>
        {options.map((option, index) => (
          <span
            key={index}
            className={
              option.name === active?.name ? styles.active : styles.option
            }
            onClick={() => onSelect(option)}
          >
            {option.name}
          </span>
        ))}
      </div>
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
  active: PropTypes.object,
  question: PropTypes.string,
};
