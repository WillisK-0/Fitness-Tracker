import express from 'express'
import cors from 'cors';
import bodyparser from 'cors';
import logger from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import passport from 'passport';
import helmet from 'helmet';
/* const expressEdge = require("express-edge");
const express = require("express");
const db = require("./models");
const edge = require("edge.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const expressSession = require('express-session');
const connectFlash = require("connect-flash");
const cors = require("cors");
 

const createUserController = require("./controllers/createUser");
const loginController = require("./controllers/login");
const logoutController = require("./controllers/logout");
const storePost = require('./middleware/storePost');
const auth = require("./middleware/auth");
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated')
const app = express();
const { config, engine } = require('express-edge');

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
// app.set('views', `${__dirname}/views`);
// app.use(edge());
app.use(connectFlash());
app.use(fileUpload());
app.use(connectFlash());
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

 
app.use(expressSession({
    secret: 'secret',
}));

app.use('*', (req, res, next) => {
    edge.global('auth', req.session.userId)
    next()
});

app.post("/users/login", redirectIfAuthenticated, loginController);
app.get("/auth/register", redirectIfAuthenticated, createUserController);
app.get("/auth/logout", redirectIfAuthenticated, logoutController);

app.listen(3001, () => {
    console.log("App listening on port 3001");
  });

  module.exports = app;*/

  const app = express();

  const API_PORT = process.env.API_PORT || 3001;

require('./config/passport');

const whitelist = [
    'http://localhost:3000',
    'http://localhost: 3001',
];

const corsOptions = {
    origin: (origin, clallback) => {
    if (whitelist.indexOf(origin) !== -1 ) {
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
},
optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(logger('dev'));
app.usew(helmet());
app.use(passport.initialize());

require('./routes/loginUser')(app);
require()

app.listen(API_PORT, () => console.log(`deployed on port ${API_PORT}`));

module.exports = app;