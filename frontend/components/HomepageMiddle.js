import styles from '../styles/HomepageMiddle.module.css';
import Tweet from './Tweet';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTweet, deleteAllTweets } from '../reducers/tweets';
import findHashtags from '../modules/findHashtags';

function HomepageMiddle() {
    const [tweetInput, setTweetInput] = useState('')
	const tweets = useSelector((state) => state.tweets.value);
    
    const dispatch = useDispatch();

    const onClickSendTweet = () => {
        fetch('http://localhost:3000/tweets', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: tweetInput }),
        }).then(res => res.json())
            .then(data => {
                if (data.result) {
                    dispatch(addTweet({firstname: 'Terence', username: "tmbu", message: tweetInput}))
                    setTweetInput('')
                }
            })
    }
    const allTweets = tweets.map((data, i) => {
        // const hash = data.message.split(' ').filter(v=> v.startsWith('#'))
        return <Tweet key={i} {...data} />
    })

    

    

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.tweetContainer}>
                <input onChange={(e) => setTweetInput(e.target.value)} maxLength="280" className={styles.inputTweet} placeholder="What's up ?" type="text" />
            </div>
            <div className={styles.bottomInput}>
                <p className={styles.nbCharacters}>{tweetInput.length}/280</p>
                <button onClick={() => onClickSendTweet()} className={styles.tweetBtn}>Tweet</button>
                <button onClick={() => dispatch(deleteAllTweets())}>Delete all tweet states "TEST purpose"</button>
            </div>
        </div>
        <div className={styles.tweetContainer}>
            {allTweets}
        </div>
    </div>
  );
}

export default HomepageMiddle;