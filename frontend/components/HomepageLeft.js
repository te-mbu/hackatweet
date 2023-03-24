import styles from '../styles/HomepageLeft.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../reducers/users';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';



function HomepageLeft() {

  const dispatch = useDispatch()
  const router = useRouter();

  const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')

  const token = useSelector(state => state.users.value)
  // Logout
  function handleClickLogout() {
    dispatch(logout())
    router.push('/')
  }

  useEffect(() => {
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

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="./logo.png" alt="logo" />
      <div>
      <div className={styles.userInfos}>
        <img className={styles.profilePicture} src="./profile-picture.png" alt="profile-picture" />
        <div className={styles.names}>
            <p className={styles.firstname}>{firstname}</p>
            <p className={styles.username}>{username}</p>
        </div>
      </div>
      <button onClick={() => handleClickLogout()} className={styles.logoutBtn}>Logout</button>
      </div>
    </div>
  );
}

export default HomepageLeft;