import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Tweet() {
  return (
    <div className={styles.container}>
        <div className={styles.userInfos}>
            <img className={styles.profilePicture} src="./profile-picture.png" alt="profile-picture" />
            <p className={styles.firstname}>Firstname</p>
            <p className={styles.username}>@Username</p>
            <p className={styles.uploadTime}>5 hours</p>
        </div>
        <div className={styles.message}>Welcome to hackatweet</div>
        <div className={styles.like}><FontAwesomeIcon icon={faHeart} />  0</div>
    </div>
  );
}

export default Tweet;