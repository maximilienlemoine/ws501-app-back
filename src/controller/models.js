const MysqlConnector = require('../util/mysqlConnector');

const addModel = (req, res) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {file_name, name, front_wheel, back_wheel} = req.body;
    mysqlConnector.query(
        `INSERT INTO models (file_name, name, front_wheel, back_wheel)
         VALUES (?, ?, ?, ?)`,
        [file_name, name, front_wheel, back_wheel],
        function(err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const updateModel = (req, res) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {file_name, name, front_wheel, back_wheel} = req.body;
    const {id} = req.params;
    mysqlConnector.query(
        `UPDATE models
         SET file_name = ?,
             name = ?,
             front_wheel = ?,
             back_wheel = ?
         WHERE id = ?`,
        [file_name, name, front_wheel, back_wheel, id],
        function(err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const deleteModel = (req, res) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {id} = req.params;
    mysqlConnector.query(
        `DELETE
         FROM models
         WHERE id = ?`,
        [id],
        function(err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const getModels = (req, res) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    mysqlConnector.query(
        `SELECT *
         FROM models`,
        [],
        function(err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const getModelById = (req, res) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {id} = req.params;
    mysqlConnector.query(
        `SELECT *
         FROM models
         WHERE id = ?`,
        [id],
        function(err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

module.exports = {
    addModel,
    updateModel,
    deleteModel,
    getModels,
    getModelById,
};