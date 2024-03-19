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

        // Select the database after it has been created
        mysqlConnector.query(
            `USE ${process.env.MYSQL_DATABASE}`,
            null,
            (err, results) => {
                if (err) {
                    console.error('Error selecting database:', err);
                    return;
                }
                console.log('Database selected');

                // Create table "model" after the database is selected
                mysqlConnector.query(
                    `CREATE TABLE IF NOT EXISTS models (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        file_name VARCHAR(255),
                        name VARCHAR(255),
                        front_wheel VARCHAR(255),
                        back_wheel VARCHAR(255)
                    )`,
                    null,
                    (err, results) => {
                        if (err) {
                            console.error('Error creating table:', err);
                            return;
                        }
                        console.log('Table created');

                        // Close the connection after the table has been created
                        mysqlConnector.close();
                    }
                );
            }
        );
    }
);