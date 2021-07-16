import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { DB_host, DB_user, DB_password, DB_database } from './config.js'

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

    console.log(login, password, keepLogged);
})

app.post('/register', (req, res)=> {
    const rb = req.body;

    const name = rb.name;
    const surname = rb.surname;
    const email = rb.email;
    const password = rb.password;

    console.log(name, surname, email, password);
})
//--Middleware for login and register--//

//Middleware for userForms
app.post('/useridea', (req, res)=> {
    const rb = req.body;

    const title = rb.title;
    const idea = rb.idea;
    const name = rb.name;
    const email = rb.email;
    const reason = rb.reason;

    console.log(title, idea, name, email, reason);
})
//--Middleware form userForms--//