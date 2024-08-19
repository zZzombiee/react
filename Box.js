import styles from "./Box.module.css";

const Box = (props) => {
  const { text } = props;
  return <div className={styles.box}>{text}</div>;
};

export default Box;
