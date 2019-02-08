const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const { SERVER_PORT, DB_CONNECTION, SESSION_SECRET } = process.env;
const ctrl = require('./controllers/controller');
const session = require('express-session');

const app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname + './../src/public/'));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}));

massive(DB_CONNECTION).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`helo is saying hello on port ${SERVER_PORT}`))
})

//authentication
app.post('/auth/login', ctrl.login);
app.post('/auth/register', ctrl.register);
app.post('/auth/logout', ctrl.logout);

//user data
app.get('/api/user', ctrl.getUser);
app.get('/api/posts', ctrl.getPosts)
app.get('/api/post/:id', ctrl.getPost)