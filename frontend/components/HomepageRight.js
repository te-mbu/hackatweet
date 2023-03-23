import styles from '../styles/HomepageRight.module.css';
import Trend from './Trend';


function HomepageRight() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Trends</h1>
        <div className={styles.hashtagContainer}>
            <Trend/>
        </div>
    </div>
  );
}

export default HomepageRight;