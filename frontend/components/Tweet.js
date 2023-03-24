import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Tweet(props) {
  const [isLiked, setIsLiked] = useState(false)
  const [countLike, setCountLike] = useState(0)

  // Update color/counter if tweet is liked
  let isLikedStyle = {}
  if (isLiked) {
    isLikedStyle = {color: "red"}
  }
  useEffect(() => {
    isLiked ? setCountLike(1) : setCountLike(0)
  }, [isLiked])

  return (
    <div className={styles.container}>
        <div className={styles.userInfos}>
            <img className={styles.profilePicture} src="./profile-picture.png" alt="profile-picture" />
            <p className={styles.firstname}>{props.firstname}</p>
            <p className={styles.username}><span>@</span>{props.username}</p>
            <p className={styles.uploadTime}>5 hours</p>
        </div>
        <div className={styles.message}>{props.message}</div>
        <div className={styles.like} ><FontAwesomeIcon onClick={() => setIsLiked(!isLiked)} icon={faHeart} style={isLikedStyle}/><span className={styles.countLike}>{countLike}</span></div>
    </div>
  );
}

export default Tweet;