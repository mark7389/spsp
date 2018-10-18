const mysql = require('mysql2');

const conn_Params = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '@%73647690K',
    database: process.env.DB_db || 'spsp',
    connectionLimit: 100
}

const connection = mysql.createPool(conn_Params);

// connection.connect(err=>{
//     err ? console.log("error database connection: " + err.stack) : console.log("connected as id " + connection.threadId);
// });

module.exports = connection;

