const MysqlConnector = require('../util/mysqlConnector');

const addModel = (req, res) => {
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {
        file_name,
        name,
        back_backery_bois,
        back_backery_standard,
        back_daily,
        back_daily_mixte,
        back_epic_bois,
        back_epic_standard,
        back_luggage_rack,
        back_thule_bag,
        back_woody,
        belt,
        central_stand,
        chain,
        frame,
        front_backery_bois,
        front_backery_standard,
        front_daily,
        front_daily_mixte,
        front_epic_bois,
        front_epic_standard,
        front_luggage_rack,
        front_woody,
        normal_fork,
        normal_seat,
        rear_stand,
        suspension_fork,
        suspension_seat
    } = req.body;
    mysqlConnector.query(
        `INSERT INTO models (
                    file_name,
                    name,
                    file_name,
                    name,
                    back_backery_bois,
                    back_backery_standard,
                    back_daily,
                    back_daily_mixte,
                    back_epic_bois,
                    back_epic_standard,
                    back_luggage_rack,
                    back_thule_bag,
                    back_woody,
                    belt,
                    central_stand,
                    chain,
                    frame,
                    front_backery_bois,
                    front_backery_standard,
                    front_daily,
                    front_daily_mixte,
                    front_epic_bois,
                    front_epic_standard,
                    front_luggage_rack,
                    front_woody,
                    normal_fork,
                    normal_seat,
                    rear_stand,
                    suspension_fork,
                    suspension_seat
        )
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            file_name,
            name,
            back_backery_bois,
            back_backery_standard,
            back_daily,
            back_daily_mixte,
            back_epic_bois,
            back_epic_standard,
            back_luggage_rack,
            back_thule_bag,
            back_woody,
            belt,
            central_stand,
            chain,
            frame,
            front_backery_bois,
            front_backery_standard,
            front_daily,
            front_daily_mixte,
            front_epic_bois,
            front_epic_standard,
            front_luggage_rack,
            front_woody,
            normal_fork,
            normal_seat,
            rear_stand,
            suspension_fork,
            suspension_seat
        ],
        function (err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const updateModel = (req, res) => {
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {
        file_name,
        name,
        back_backery_bois,
        back_backery_standard,
        back_daily,
        back_daily_mixte,
        back_epic_bois,
        back_epic_standard,
        back_luggage_rack,
        back_thule_bag,
        back_woody,
        belt,
        central_stand,
        chain,
        frame,
        front_backery_bois,
        front_backery_standard,
        front_daily,
        front_daily_mixte,
        front_epic_bois,
        front_epic_standard,
        front_luggage_rack,
        front_woody,
        normal_fork,
        normal_seat,
        rear_stand,
        suspension_fork,
        suspension_seat
    } = req.body;
    const {id} = req.params;
    mysqlConnector.query(
        `UPDATE models
         SET file_name              = ?,
             name                   = ?,
             back_backery_bois      = ?,
             back_backery_standard  = ?,
             back_daily             = ?,
             back_daily_mixte       = ?,
             back_epic_bois         = ?,
             back_epic_standard     = ?,
             back_luggage_rack      = ?,
             back_thule_bag         = ?,
             back_woody             = ?,
             belt                   = ?,
             central_stand          = ?,
             chain                  = ?,
             frame                  = ?,
             front_backery_bois     = ?,
             front_backery_standard = ?,
             front_daily            = ?,
             front_daily_mixte      = ?,
             front_epic_bois        = ?,
             front_epic_standard    = ?,
             front_luggage_rack     = ?,
             front_woody            = ?,
             normal_fork            = ?,
             normal_seat            = ?,
             rear_stand             = ?,
             suspension_fork        = ?,
             suspension_seat        = ?
         WHERE id = ?`,
        [
            file_name,
            name,
            back_backery_bois,
            back_backery_standard,
            back_daily,
            back_daily_mixte,
            back_epic_bois,
            back_epic_standard,
            back_luggage_rack,
            back_thule_bag,
            back_woody,
            belt,
            central_stand,
            chain,
            frame,
            front_backery_bois,
            front_backery_standard,
            front_daily,
            front_daily_mixte,
            front_epic_bois,
            front_epic_standard,
            front_luggage_rack,
            front_woody,
            normal_fork,
            normal_seat,
            rear_stand,
            suspension_fork,
            suspension_seat,
            id
        ],
        function (err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const deleteModel = (req, res) => {
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {id} = req.params;
    mysqlConnector.query(
        `DELETE
         FROM models
         WHERE id = ?`,
        [id],
        function (err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const getModels = (req, res) => {
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    mysqlConnector.query(
        `SELECT *
         FROM models`,
        [],
        function (err, results) {
            mysqlConnector.close();
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        }
    );
}

const getModelById = (req, res) => {
    const mysqlConnector = new MysqlConnector();
    mysqlConnector.connect();
    const {id} = req.params;
    mysqlConnector.query(
        `SELECT *
         FROM models
         WHERE id = ?`,
        [id],
        function (err, results) {
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