import styles from '../styles/HomepageMiddle.module.css';
import Tweet from './Tweet';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTweet } from '../reducers/tweets';

function HomepageMiddle() {
    const [tweetInput, setTweetInput] = useState('')

    const dispatch = useDispatch();
	const tweets = useSelector((state) => state.tweets.value);

    const onClickSendTweet = () => {
        /* envoyer en BDD */
    }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.tweetContainer}>
                <input onChange={(e) => setTweetInput(e.target.value)} className={styles.inputTweet} placeholder="What's up ?" type="text" />
            </div>
            <div className={styles.bottomInput}>
                <p className={styles.nbCharacters}>0/280</p>
                <button onClick={() => onClickSendTweet()} className={styles.tweetBtn}>Tweet</button>
            </div>
        </div>
        <div className={styles.tweetContainer}>
            <Tweet/>
        </div>
    </div>
  );
}

export default HomepageMiddle;