import User from '../sequelize';

module.exports = app => {
    app.post('/user-login'. (req, res, next) => {
        bcrypt.compare(password, user.password, (err, users, result) => {
            if (err) {
                console.error(`error ${err}`);
            }
            if (result !== undefined) {
                console.error(result.message);
                if (result.message === 'bad username');
                    res.status(401).send(info.message);
            } else {
                res.status(403).send(info.message);
            } 
        } else {
            req.logIn(users, () => {
                User.findOne({
                    where: {
                        username: req.body.username,
                    }
                })
            })
        })
    })
}