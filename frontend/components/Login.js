import styles from '../styles/Login.module.css';
import { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../reducers/users';
import { useRouter } from 'next/router'

function Login() {
  // Get router to redirect user if authenticated
  const router = useRouter()

  const [signupFirstname, setSignupFirstname] = useState('')
  const [signupUsername, setSignupUsername] = useState('')
  const [signupPassword, setSignupPassword] = useState('')


  const dispatch = useDispatch();

  function handleClickSignup() {
    console.log(signupFirstname)
    console.log(signupUsername)
    console.log(signupPassword)
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({firstname: signupFirstname, username: signupUsername, password: signupPassword})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.result) {
          dispatch(login(data.token))
          router.push('/homepage');
          setSignupFirstname('')
          setSignupUsername('')
          setSignupPassword('')
        }
      })
  }

//Sign Up

const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

const showModalUp = () => {
  setIsSignUpModalVisible(!isSignUpModalVisible);
};

let modalSignUp;
if (isSignUpModalVisible){
  modalSignUp =(
  <div className={styles.signUpModal}>
    <div className={styles.logmodallogo}><img src="logo.png"/></div>
    <div className={styles.logmodaltitle}>Create your Hackatweet account</div>
    <input onChange={e => setSignupFirstname(e.target.value)} className={styles.inputfirstname} placeholder="FirstName"></input>
    <input onChange={e => setSignupUsername(e.target.value)} className={styles.inputuser} placeholder="UserName"></input>
    <input onChange={e => setSignupPassword(e.target.value)}className={styles.inputpassword} type ="password" placeholder="Password"></input>
    <Button onClick={() => handleClickSignup()} className={styles.modalsign}>Sign Up</Button>
  </div>
  )
} 


//Sign In

const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

const showModalIn = () => {
  setIsSignInModalVisible(!isSignInModalVisible);
};

let modalSignIn;
if (isSignInModalVisible){
  modalSignIn =(
  <div className={styles.signUpModal}>
    
    <div className={styles.logmodallogo}><img src="logo.png"/></div>
    <div className={styles.logmodaltitle}>Connect to Hackatweet</div>
    <input className={styles.inputuser} placeholder="UserName"></input>
    <input className={styles.inputpassword} type ="password" placeholder="Password"></input>
    <Button className={styles.modalsign}>Sign In</Button>
  </div>
  )
} 

  return (
    <div>
      <main className={styles.main}>

        <div className={styles.left}>
          <div className={styles.logoleft}><img src="logo.png"/></div>
        </div>

        <div className={styles.right}>
              <div className={styles.logoright}><img src="logo.png"/></div>
              <div className={styles.title}>See what's<br/>happening</div>
              <div className={styles.subtitle}>Join Hackatweet today.</div>
              <Button className={styles.signup} onClick={showModalUp}>Sign Up</Button>
              <div className={styles.smalltext}>Already have an account ?</div>
              <Button className={styles.signin} onClick={showModalIn}>Sign In</Button>
        </div>

        {isSignUpModalVisible && <div id="react-modals">
				<Modal  className={styles.signUpModal} visible={isSignUpModalVisible} closable={true} onCancel={showModalUp} footer={null}>
					{modalSignUp}
				</Modal>
			</div>}

      {isSignInModalVisible && <div id="react-modals">
				<Modal  className={styles.signInModal} visible={isSignInModalVisible} closable={true} onCancel={showModalIn} footer={null}>
					{modalSignIn}
				</Modal>
			</div>}
      <Link href='/homepage'>Go to home page</Link>
      </main>
    </div>
  );
}

export default Login;
