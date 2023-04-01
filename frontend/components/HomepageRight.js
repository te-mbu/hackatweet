import styles from '../styles/HomepageRight.module.css';
import Trend from './Trend';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function HomepageRight() {
  const [hashtags, setHashtags] = useState([])
  const tweets = useSelector(state => state.tweets.value)


  useEffect(() => {
    fetch('http://localhost:3000/tweets/hashtags')
      .then(res => res.json())
      .then(data => {
        if (data.result) {
          setHashtags(data.hashtags)
        }
      })
  }, [tweets])
  const displayHashtags = hashtags.map((data, i) => {
    return <Trend hashtags={data.hashtag} count={data.count}/>
  })

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Trends</h1>
        <div className={styles.hashtagContainer}>
            {displayHashtags}
        </div>
    </div>
  );
}

export default HomepageRight;