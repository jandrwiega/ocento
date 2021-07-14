import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

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