import styles from "./YouTubeForm.module.css";

const TextError = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};

export default TextError;
