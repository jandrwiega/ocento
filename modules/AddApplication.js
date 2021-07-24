const { DB_host, DB_user, DB_password, DB_database, MAIL_host, MAIL_port, MAIL_user, MAIL_pass } = require('../config.js')
const mysql = require('mysql')
const nodemailer = require('nodemailer')

exports.setapplication = (id, name, email, link) => {
    const sql = `INSERT INTO worksapplication (adverid, name, email, file) VALUES ('${id}', '${name}', '${email}', '${link}')`
    const connection = mysql.createConnection({
        host     : DB_host,
        user     : DB_user,
        password : DB_password,
        database : DB_database
    });
    connection.connect();
    connection.query(sql, (error, results)=> {
        if(error) throw error;
    })
    connection.end();

    //Mail send

    const transporter = nodemailer.createTransport({
        host: MAIL_host,
        port: MAIL_port,
        secure: 'true',
        auth: {
            user: MAIL_user,
            pass: MAIL_pass
        }
    });
    const mailOptions = {
        from: MAIL_user,
        to: 'janek@workfind.pl', 
        subject: 'Ocenmyto.pl - dziękujemy za twoją aplikacje',
        html: `Dziękujemy za twoją aplikacje`
    };
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            console.log(err);
        }
    })
}