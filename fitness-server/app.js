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
  let height = req.body.height;
  let weight = req.body.weight;
  let goal = req.body.goal;
  let age = req.body.age;
  bcrypt.hash(password, 10, function (err, hashpass) {
    db.User.create({
      username: username,
      password: hashpass,
      gender: gender,
      height: height,
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
