import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faSolid } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTweet } from "../reducers/tweets";

function Tweet(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);
  const dispatch = useDispatch();

  // Update color/counter if tweet is liked
  let isLikedStyle = {};
  if (isLiked) {
    isLikedStyle = { color: "red" };
  }
  useEffect(() => {
    isLiked ? setCountLike(1) : setCountLike(0);
  }, [isLiked]);

  function handleDeleteBtn() {
    dispatch(deleteTweet(props.message));
    fetch("http://localhost:3000/tweets", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: props.message }),
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.topTweet}>
        <div className={styles.userInfos}>
          <img
            className={styles.profilePicture}
            src="./profile-picture.png"
            alt="profile-picture"
          />
          <p className={styles.firstname}>{props.firstname}</p>
          <p className={styles.username}>
            <span>@</span>
            {props.username}
          </p>
          <p className={styles.uploadTime}>5 hours</p>
        </div>
      </div>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.buttonsContainer}>
        <div className={styles.like}>
          <FontAwesomeIcon
            onClick={() => setIsLiked(!isLiked)}
            icon={faHeart}
            style={isLikedStyle}
          />
        </div>
        <span className={styles.countLike}>{countLike}</span>
        <div className={styles.deleteBtnContainer}>
          <FontAwesomeIcon
            onClick={() => handleDeleteBtn()}
            icon={faTrash}
            className={styles.deleteBtn}
          />
        </div>
      </div>
    </div>
  );
}

export default Tweet;
