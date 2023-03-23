import styles from '../styles/Trend.module.css';

function Trend() {
  return (
    <div className={styles.container}>
        <p className={styles.hashtag}>#hashtag</p>
        <p className={styles.description}>1 Tweet</p>
    </div>
  );
}

export default Trend;