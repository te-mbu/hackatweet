import styles from "../styles/Login.module.css";
import { useState } from "react";
import { Modal, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/users";
import { useRouter } from "next/router";

function Login() {
  // Get router to redirect user if authenticated
  const router = useRouter();
  const dispatch = useDispatch();

  //Sign Up

  const [signupFirstname, setSignupFirstname] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  function handleClickSignup() {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: signupFirstname,
        username: signupUsername,
        password: signupPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(login(data.token));
          router.push("/homepage");
          setSignupFirstname("");
          setSignupUsername("");
          setSignupPassword("");
        }
      });
  }

  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);

  const showModalUp = () => {
    setIsSignUpModalVisible(!isSignUpModalVisible);
  };

  let modalSignUp;
  if (isSignUpModalVisible) {
    modalSignUp = (
      <div className={styles.signUpModal}>
        <img className={styles.logmodallogo} src="logo.png" />
        <div className={styles.logmodaltitle}>
          Create your Hackatweet account
        </div>
        <input
          onChange={(e) => setSignupFirstname(e.target.value)}
          className={styles.inputfirstname}
          placeholder="Firstname"
        ></input>
        <input
          onChange={(e) => setSignupUsername(e.target.value)}
          className={styles.inputuser}
          placeholder="Username"
        ></input>
        <input
          onChange={(e) => setSignupPassword(e.target.value)}
          className={styles.inputpassword}
          type="password"
          placeholder="Password"
        ></input>
        <Button
          onClick={() => handleClickSignup()}
          className={styles.modalsign}
        >
          Sign Up
        </Button>
      </div>
    );
  }

  //Sign In

  const [signinUsername, setSigninUsername] = useState("");
  const [signinPassword, setSigninPassword] = useState("");

  function handleClickSignin() {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signinUsername,
        password: signinPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          dispatch(login(data.token));
          setSigninUsername("");
          setSigninPassword("");
          router.push("/homepage");
        }
      });
  }


  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);

  const showModalIn = () => {
    setIsSignInModalVisible(!isSignInModalVisible);
  };

  let modalSignIn;
  if (isSignInModalVisible) {
    modalSignIn = (
      <div className={styles.signInModal}>
        <img className={styles.logmodallogo} src="logo.png" />
        <div className={styles.logmodaltitle}>Connect to Hackatweet</div>
        <input onChange={e => setSigninUsername(e.target.value)} className={styles.inputuser} placeholder="Username"></input>
        <input
          onChange={e => setSigninPassword(e.target.value)}
          className={styles.inputpassword}
          type="password"
          placeholder="Password"
        ></input>
        <Button onClick={() => handleClickSignin()} className={styles.modalsign}>Sign In</Button>
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.left}>
            <img className={styles.logoleft} src="login-background.jpg" alt="left background" />
        </div>

        <div className={styles.right}>
          <div className={styles.logoright}>
            <img src="logo.png" />
          </div>
          <div className={styles.title}>
            See what's
            <br />
            happening
          </div>
          <div className={styles.subtitle}>Join Hackatweet today.</div>
          <Button className={styles.signup} onClick={showModalUp}>
            Sign Up
          </Button>
          <div className={styles.smalltext}>Already have an account ?</div>
          <Button className={styles.signin} onClick={showModalIn}>
            Sign In
          </Button>
        </div>

        {isSignUpModalVisible && (
          <div>
            <Modal
              className={styles.signUpModal}
              visible={isSignUpModalVisible}
              closable={true}
              onCancel={showModalUp}
              footer={null}
            >
              {modalSignUp}
            </Modal>
          </div>
        )}

        {isSignInModalVisible && (
          <div>
            <Modal
              className={styles.signInModal}
              visible={isSignInModalVisible}
              closable={true}
              onCancel={showModalIn}
              footer={null}
            >
              {modalSignIn}
            </Modal>
          </div>
        )}
      </main>
    </div>
  );
}

export default Login;
