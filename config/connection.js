const mysql = require('mysql2');

const conn_Params = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    database: process.env.DB_db || ''
}

const connection = mysql.createConnection(conn_Params);

connection.connect(err=>{
    err ? console.log("error database connection: " + err.stack) : console.log("connected as id " + connection.threadId);
});

module.exports = connection;

