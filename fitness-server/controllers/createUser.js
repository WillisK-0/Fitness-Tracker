const bcrypt = require('bcrypt');
const db = require("../models");

module.exports = (req, res) => {
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
}