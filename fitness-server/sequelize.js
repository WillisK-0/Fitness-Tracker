import Sequelize from 'sequelize';
import User from './models/user';

const sequelize = new Sequelize('users'{
    host: 'ruby.db.elephantsql.com',
    dialect: 'postgres',
});

const User = Usermodel(sequelize, Sequelize);

sequelize.sync().then(() => {
    console.log('User db and table created')
})

 module.exports = User;

