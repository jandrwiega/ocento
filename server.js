const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path =  require('path');
const mysql = require('mysql')
const { DB_host, DB_user, DB_password, DB_database } = require('./config.js')

const app = express();
const dirname = path.resolve();

app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const port = process.env.port || 5000;
app.listen(port, err => { if(err) throw err })

app.get('/getfilmlist', (req, res)=> {
    res.sendFile(path.join(dirname + '/database/films.json'))
})

//Middleware for login and register 
app.post('/login', (req, res)=> {
    const rb = req.body;

    const login = rb.login;
    const password = rb.password;
    const keepLogged = rb.keepLogged;

    const sql = `SELECT id, name, surname, email from clients where email='${login}' AND password='${password}' AND emailaccepted='1'`
    const connection = mysql.createConnection({
        host     : DB_host,
        user     : DB_user,
        password : DB_password,
        database : DB_database
    });
    connection.connect();
    connection.query(sql, (error, results)=> {
        if(error) throw error;
        if(results[0] === undefined) {
            res.send({isLogged: false, loginData: [], keepLogged: false})
        }   else {
            res.send({isLogged: true, loginData: results[0], keepLogged})
        }
    })
    connection.end();
})

app.post('/resetpassword', (req, res)=> {
    const email = req.body.resetEmail;

    console.log(email);
})

const CreateUser = require('./modules/CreateUser')
const ConfirmAccount = require('./modules/ConfirmAccount');
app.post('/register', (req, res)=> {
    const rb = req.body;

    const name = rb.name;
    const surname = rb.surname;
    const email = rb.email;
    const password = rb.password;


    const sql = `SELECT email from clients WHERE email='${email}'`
    const connection = mysql.createConnection({
        host     : DB_host,
        user     : DB_user,
        password : DB_password,
        database : DB_database
    });
    connection.connect();
    connection.query(sql, (error, results)=> {
        if(error) throw error;
        if(results.length === 0) {
            CreateUser.createuser(name, surname, email, password)
            ConfirmAccount.confirm(email)
            res.send({registerResponse: 'added'})
        }   else {
            console.log('email exist');
            res.send({registerResponse: 'error'})
        }
    })
    connection.end();
})

const ConfirmMail = require('./modules/ConfirmMail')
app.get('/mailauth/:mail', (req, res)=> {
    const mail = req.params.mail;
    ConfirmMail.confirm(mail)
    res.redirect('/registered')
})

app.get('/registered', (req, res)=> {
    res.send(`ok`)
})
//--Middleware for login and register--//

//Middleware for userForms
const CreateIdea = require('./modules/CreateIdea');
app.post('/useridea', (req, res)=> {
    const rb = req.body;

    const title = rb.title;
    const idea = rb.idea;
    const name = rb.name;
    const email = rb.email;
    const reason = rb.reason;

    CreateIdea.createidea(name, email, title, idea, reason)
})
//--Middleware form userForms--//

//Middleware for praca link
app.get('/db/praca', (req, res)=> {
    res.sendFile(path.join(dirname + '/database/advertisments.json'))
})

const AddApplication = require('./modules/AddApplication')
app.post('/praca/aplikacja/:id', (req, res)=> {
    const params = req.params;
    const name = req.body.name;
    const email = req.body.email;
    const file = req.body.file;

    AddApplication.setapplication(params.id, name, email, file)
})
//--Middleware for praca link--//