import styles from '../styles/HomepageLeft.module.css';
import { useDispatch } from 'react-redux';
import { logout } from '../reducers/users';
import { useRouter } from 'next/router';


function HomepageLeft() {

  const dispatch = useDispatch()
  const router = useRouter();

  function handleClickLogout() {
    dispatch(logout())
    router.push('/')
  }

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./logo.png" alt="logo" />
      <div>
      <div className={styles.userInfos}>
        <img className={styles.profilePicture} src="./profile-picture.png" alt="profile-picture" />
        <div className={styles.names}>
            <p className={styles.firstname}>Firstname</p>
            <p className={styles.username}>Username</p>
        </div>
      </div>
      <button onClick={() => handleClickLogout()}>Logout</button>
      </div>
    </div>
  );
}

export default HomepageLeft;