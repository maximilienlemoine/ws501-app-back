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

        // Create table "model" after the database is selected
        mysqlConnector.query(
            `CREATE TABLE IF NOT EXISTS models
            (
                id INT AUTO_INCREMENT PRIMARY KEY,
                file_name VARCHAR(255),
                name VARCHAR(255),
                frame VARCHAR(255),
                belt VARCHAR(255),
                chain VARCHAR(255),
                normal_fork VARCHAR(255),
                suspension_fork VARCHAR(255),
                normal_seat VARCHAR(255),
                suspension_seat VARCHAR(255),
                rear_stand VARCHAR(255),
                central_stand VARCHAR(255),
                front_luggage_rack VARCHAR(255),
                back_luggage_rack VARCHAR(255),
                simple_back_rack VARCHAR(255),
                front_daily VARCHAR(255),
                back_daily VARCHAR(255),
                front_daily_mixte VARCHAR(255),
                back_daily_mixte VARCHAR(255),
                front_epic_standard VARCHAR(255),
                back_epic_standard VARCHAR(255),
                front_epic_bois VARCHAR(255),
                back_epic_bois VARCHAR(255),
                front_woody VARCHAR(255),
                back_woody VARCHAR(255),
                front_backery_standard VARCHAR(255),
                back_backery_standard VARCHAR(255),
                front_backery_bois VARCHAR(255),
                back_backery_bois VARCHAR(255),
                back_thule_bag VARCHAR(255)
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