import styles from '../styles/Trend.module.css';

function Trend(props) {
  return (
    <div className={styles.container}>
        <p className={styles.hashtag}>{props.hashtags}</p>
        <p className={styles.description}>1 Tweet</p>
    </div>
  );
}

export default Trend;