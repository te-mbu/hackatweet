var express = require("express");
var router = express.Router();
const uid2 = require("uid2");
const bcrypt = require("bcrypt");
const { checkBody } = require("../modules/checkBody");
const User = require("../models/users");

// POST /signup
router.post("/signup", function (req, res) {
  // Check if input fields are correctly filled
  if (!checkBody(req.body, ["firstname", "username", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Check if the user has not already been registered
  User.findOne({ username: req.body.username }).then((data) => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        firstname: req.body.firstname,
        username: req.body.username,
        password: hash,
        token: uid2(32),
      });

      // Save new user to database
      newUser.save().then((newUser) => {
        res.json({ result: true, token: newUser.token });
      });

    } else {
      // User already exists in database
      res.json({ result: false, error: "User already exists" });
    }
  });
});

// POST /signin
router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({ username: req.body.username }).then(data => {
    if (data && bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'User not found or wrong password' });
    }
  });
});

//  POST /infos
router.post('/infos', (req, res) => {
  if (!checkBody(req.body, ['token'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  User.findOne({token: req.body.token}).then(data => {
    if (data) {
      res.json({result: true, data: data})
    } else {
      res.json({result: false, error: "No user found"})
    }
  })
})

module.exports = router;
