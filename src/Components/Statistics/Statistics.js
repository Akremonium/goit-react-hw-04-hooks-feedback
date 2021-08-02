import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  let percentageSpan;

  if (positivePercentage >= 80) {
    percentageSpan = <span className={styles.good}>{positivePercentage}%</span>;
  } else if (positivePercentage > 30) {
    percentageSpan = (
      <span className={styles.neutral}>{positivePercentage}%</span>
    );
  } else
    percentageSpan = <span className={styles.bad}>{positivePercentage}%</span>;

  return (
    <div className={styles.statistics}>
      <p>
        Good: <span className={styles.good}>{good}</span>
      </p>
      <p>
        Neutral: <span className={styles.neutral}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={styles.bad}>{bad}</span>
      </p>

      <p>
        Total feedbacks: <span>{total}</span>
      </p>
      <p>Positive feedbacks: {percentageSpan}</p>
    </div>
  );
};

Statistics.defaultProps = {
  totalFeedbacks: 0,
  positivePercentage: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;
