const { MAIL_host, MAIL_port, MAIL_user, MAIL_pass, FETCH_link } = require('../config')
const nodemailer = require('nodemailer')

exports.resetAuth = () => {
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
        subject: 'Ocenmyto.pl - resetowanie hasła',
        html: `<a href="${FETCH_link}/resetauth/${email}">Zresetuj hasło</a>`
    };
    transporter.sendMail(mailOptions, (err, info)=> {
        if(err) {
            console.log(err);
        }
        else {
            console.log(FETCH_link);
            console.log('Email sent:' + info.response);
        }
    })
}