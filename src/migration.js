const MysqlConnector = require('./util/mysqlConnector');

const mysqlConnector = new MysqlConnector();
mysqlConnector.connect();

mysqlConnector.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DATABASE}`,
    null,
    (err, results) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database created');
    }
);

mysqlConnector.close();