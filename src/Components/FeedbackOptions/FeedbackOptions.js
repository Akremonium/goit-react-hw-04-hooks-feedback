import styles from "./FeedbackOptions.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((option) => (
      <button
        name={option}
        type="button"
        className={styles[option]}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
