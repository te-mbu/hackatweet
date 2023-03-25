var express = require("express");
var router = express.Router();
const { checkBody } = require("../modules/checkBody");
const Tweet = require("../models/tweets");

// POST /send
router.post("/", function (req, res) {
  if (!checkBody(req.body, ["message"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  const newTweet = new Tweet({
    firstname: req.body.firstname,
    username: req.body.username,
    message: req.body.message,
    isLiked: false,
  });

  // Save new tweet to database
  newTweet.save().then(() => {
    res.json({ result: true, message: 'Tweet saved in the DB' });
  });
});

router.delete('/', (req, res) => {
    Tweet.deleteOne({message: req.body.message}).then(data => {
        if (data) {
            res.json({result: true, message: "Tweet deleted from the DB"})
        } else {
            res.json({result: false})
        }
    })
})

// GET /hashtags
router.get('/hashtags', (req, res) => {
  Tweet.find({}).then(data => {
    if (data) {
      let hashtags = []
      for (let tweet of data) {
        let hashtag = tweet.message.split(' ').filter(v=> v.startsWith('#'))
        for (let str of hashtag) {
          hashtags.push(str)
        }
      }
      res.json({result: true, hashtags: hashtags})
    } else {
      res.json({result: false})
    }
  })
})

module.exports = router;
