import styles from '../styles/HomepageMiddle.module.css';
import Tweet from './Tweet';

function HomepageMiddle() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.tweetContainer}>
                <input className={styles.inputTweet} placeholder="What's up ?" type="text" />
            </div>
            <div className={styles.bottomInput}>
                <p className={styles.nbCharacters}>0/280</p>
                <button className={styles.tweetBtn}>Tweet</button>
            </div>
        </div>
        <div className={styles.tweetContainer}>
            <Tweet/>
        </div>
    </div>
  );
}

export default HomepageMiddle;