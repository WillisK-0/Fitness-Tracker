const db = require("../models");
 
module.exports = (req, res, next) => {
    db.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            return res.redirect('/')
        }
 
        next()
    })
}