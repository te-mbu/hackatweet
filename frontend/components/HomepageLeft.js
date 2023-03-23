import styles from '../styles/HomepageLeft.module.css';

function HomepageLeft() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./logo.png" alt="logo" />
      <div className={styles.userInfos}>
        <img className={styles.profilePicture} src="./profile-picture.png" alt="profile-picture" />
        <div className={styles.names}>
            <p className={styles.firstname}>Firstname</p>
            <p className={styles.username}>Username</p>
        </div>
      </div>
    </div>
  );
}

export default HomepageLeft;