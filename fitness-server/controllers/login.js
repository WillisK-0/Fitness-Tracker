const bcrypt = require('bcrypt')
const db = require("../models");
 
module.exports = (req, res) => {
    const {
        username,
        password
    } = req.body;
    // try to find the user
    db.User.findOne({
        username
    }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
              if (result) {
                res.send({ login: true, id: user.id });
              } else {
                res.send({ login: false });
              }
            });
        }
    })
}