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

app.get("/food-items/:id", (req, res) => {
  let id = req.params.id;
  db.UserFoods.findAll({
    where: {
      userid: id,
    },
  }).then((result) => {
    res.json(result);
  });
});

app.get("/recipes/:id", (req, res) => {
  let id = req.params.id;
  db.Recipes.findAll({
    where: {
      userid: id,
    },
  }).then((result) => {
    res.json(result);
  });
});

// #######################################----POST ROUTES----########################################

app.post("/update/:id", (req, res) => {
  let id = req.params.id;
  let username = req.body.username;
  let password = req.body.password;
  let weight = req.body.weight;
  let Activity = req.body.Activity;
  let age = req.body.age;
  let goal = req.body.goal;
  let feet = req.body.feet;
  let inches = req.body.inches;
  bcrypt.hash(password, 10, function (err, hashpass) {
    db.User.update(
      {
        username: username,
        Activity: Activity,
        password: hashpass,
        weight: weight,
        age: age,
        goal: goal,
        feet: feet,
        inches: inches,
      },
      {
        where: {
          id: id,
        },
      }
    ).then(() => {
      res.send({ message: "Profile Updated Successfully" });
    });
  });
});

app.post("/add-recipe/:id", (req, res) => {
  let id = req.params.id;
  let dish = req.body.dish;

  db.Recipes.create({
    dish: dish,
    userid: id,
  });
  res.send({ message: "Recipe Added" });
});

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

app.post("/add-food/:id", (req, res) => {
  let food = req.body.food;
  let calories = req.body.calories;
  let id = req.params.id;
  db.UserFoods.create({
    food: food,
    calories: calories,
    userid: id,
  });
  res.send({ message: "Food Added" });
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

app.post("/remove-food-item/:id", (req, res) => {
  let id = req.params.id;

  db.UserFoods.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.send({ message: "Food Removed" });
  });
});

app.listen(3001, (req, res) => {
  console.log("Server is running...");
});
