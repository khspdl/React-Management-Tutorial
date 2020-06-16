const mysql = require('mysql');

const db = mysql.createPool({
    host: 'management-tutorial.cfu9rpz7zd6o.ap-northeast-1.rds.amazonaws.com',
    user: 'user',
    password: "kk71473202",
    port: '3306',
    database: 'management'
});

module.exports = db;