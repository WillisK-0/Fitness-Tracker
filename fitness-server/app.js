const express = require("express");
const db = require("./models");
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/user-info/:id", (req, res) => {
  let id = req.params.id;
  db.User.findOne({
    where: {
      id: id,
    },
  }).then((user) => {
    res.json(user);
  });
});

// #######################################----POST ROUTES----########################################

app.post("/user-login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  db.User.findOne({
    where: { username: username },
  }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.send({ login: true, id: user.id });
        } else {
          res.send({ login: false });
        }
      });
    }
  });
});

app.post("/user-registration", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let gender = req.body.gender;
  let feet = req.body.feet;
  let inches = req.body.inches;
  let Activity = req.body.Activity;
  let weight = req.body.weight;
  let goal = req.body.goal;
  let age = req.body.age;
  bcrypt.hash(password, 10, function (err, hashpass) {
    db.User.create({
      username: username,
      Activity: Activity,
      password: hashpass,
      gender: gender,
      feet: feet,
      inches: inches,
      weight: weight,
      goal: goal,
      age: age,
    });
  });
  res.send({ message: "Account Created!" });
});

app.listen(3001, (req, res) => {
  console.log("Server is running...");
});
