const MysqlConnector = require('../util/mysqlConnector');

const addModel = (model, callback) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {file_name, name, front_wheel, back_wheel} = model;
    mysqlConnector.query(
        `INSERT INTO models (file_name, name, front_wheel, back_wheel)
         VALUES (?, ?, ?, ?)`,
        [file_name, name, front_wheel, back_wheel],
        callback
    );
    mysqlConnector.close();
}

const updateModel = (id, model, callback) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {file_name, name, front_wheel, back_wheel} = model;
    mysqlConnector.query(
        `UPDATE models
         SET file_name = ?,
             name = ?,
             front_wheel = ?,
             back_wheel = ?
         WHERE id = ?`,
        [file_name, name, front_wheel, back_wheel, id],
        callback
    );
    mysqlConnector.close();
}

const deleteModel = (id, callback) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    mysqlConnector.query(
        `DELETE
         FROM models
         WHERE id = ?`,
        [id],
        callback
    );
    mysqlConnector.close();
}

const getModels = (callback) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    mysqlConnector.query(
        `SELECT *
         FROM models`,
        [],
        callback,
    );
    mysqlConnector.close();
}

const getModelById = (id, callback) =>
{
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    mysqlConnector.query(
        `SELECT *
         FROM models
         WHERE id = ?`,
        [id],
        callback
    );
    mysqlConnector.close();
}

module.exports = {
    addModel,
    updateModel,
    deleteModel,
    getModels,
    getModelById,
};