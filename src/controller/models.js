const MysqlConnector = require('../util/mysqlConnector');

class ModelController {
    constructor() {
        this.mysqlConnector = new MysqlConnector();
        this.mysqlConnector.connect();
    }

    addModel(model, callback) {
        const { file_name, name, front_wheel, back_wheel } = model;
        this.mysqlConnector.query(
            `INSERT INTO models (file_name, name, front_wheel, back_wheel) VALUES (?, ?, ?, ?)`,
            [file_name, name, front_wheel, back_wheel],
            callback
        );
    }

    updateModel(id, model, callback) {
        const { file_name, name, front_wheel, back_wheel } = model;
        this.mysqlConnector.query(
            `UPDATE models SET file_name = ?, name = ?, front_wheel = ?, back_wheel = ? WHERE id = ?`,
            [file_name, name, front_wheel, back_wheel, id],
            callback
        );
    }

    deleteModel(id, callback) {
        this.mysqlConnector.query(
            `DELETE FROM models WHERE id = ?`,
            [id],
            callback
        );
    }

    getModels(callback) {
        this.mysqlConnector.query(
            `SELECT * FROM models`,
            [],
            callback
        );
    }

    getModelById(id, callback) {
        this.mysqlConnector.query(
            `SELECT * FROM models WHERE id = ?`,
            [id],
            callback
        );
    }
}

module.exports = ModelController;