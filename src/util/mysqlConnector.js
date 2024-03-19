const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

class MysqlConnector {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
            });
    }

    connect() {
        this.connection.connect(err => {
            if (err) {
                console.error('Error connecting to MySQL:', err);
                return;
            }
            console.log('Connected to MySQL database');
        });
    }

    query(sql, params, callback) {
        this.connection.query(sql, params, (err, results, fields) => {
            if (err) {
                console.error('Error executing MySQL query:', err);
                callback(err, null);
                return;
            }
            callback(null, results);
        });
    }

    close() {
        this.connection.end(err => {
            if (err) {
                console.error('Error closing MySQL connection:', err);
                return;
            }
            console.log('MySQL connection closed');
        });
    }
}

module.exports = MysqlConnector;