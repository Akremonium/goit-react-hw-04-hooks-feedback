import styles from "./Notification.module.scss";

const Notification = ({ message }) => (
  <div className={styles.notification}>
    <p className={styles.message}>{message}</p>
  </div>
);

export default Notification;
