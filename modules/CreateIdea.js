const { DB_host, DB_user, DB_password, DB_database } = require('../config.js')
const mysql = require('mysql')

exports.createidea = (name, email, title, idea, reason) => {
    const sql = `INSERT INTO ideas (name, email, title, idea, reason) VALUES ('${name}', '${email}', '${title}', '${idea}', '${reason}')`
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
}