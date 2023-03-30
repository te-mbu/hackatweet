import styles from '../styles/HomepageMiddle.module.css';
import Tweet from './Tweet';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTweet, deleteAllTweets } from '../reducers/tweets';
import { useRouter } from 'next/router';

function HomepageMiddle() {
    const dispatch = useDispatch();
    const router = useRouter()

    
    const [tweetInput, setTweetInput] = useState('')
    const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')
    
	const tweets = useSelector((state) => state.tweets.value);
    const token = useSelector(state => state.users.value)
    
    useEffect(() => {
        if (!token) {
            router.push('/')
        }
        fetch('http://localhost:3000/users/infos', {
          method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: token }),
        }).then(res => res.json())
          .then(data => {
            if (data.result) {
              setFirstname(data.data.firstname)
              setUsername(data.data.username)
            }
          })
    }, [])

    const onClickSendTweet = () => {
        fetch('http://localhost:3000/tweets', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname:firstname, username:username, message: tweetInput }),
        }).then(res => res.json())
            .then(data => {
                if (data.result) {
                    dispatch(addTweet({firstname: firstname, username: username, message: tweetInput}))
                    setTweetInput('')
                }
            })
    }
    const allTweets = tweets.map((data, i) => {
        return <Tweet key={i} {...data} />
    })

    

    

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>Home</h1>
            <div className={styles.tweetContainer}>
                <input onChange={(e) => setTweetInput(e.target.value)} value={tweetInput} maxLength="280" className={styles.inputTweet} placeholder="What's up ?" type="text" />
            </div>
            <div className={styles.bottomInput}>
                <p className={styles.nbCharacters}>{tweetInput.length}/280</p>
                <button onClick={() => onClickSendTweet()} className={styles.tweetBtn}>Tweet</button>
                {/* <button onClick={() => dispatch(deleteAllTweets())}>Delete all tweet states "TEST purpose"</button> */}
            </div>
        </div>
        <div className={styles.tweetContainer}>
            {allTweets}
        </div>
    </div>
  );
}

export default HomepageMiddle;