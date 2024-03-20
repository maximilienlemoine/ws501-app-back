const express = require("express");
const router = express.Router();
const uploadController = require("../controller/upload");
const modelController = require("../controller/models");

let routes = (app) => {
    router.post("/upload", uploadController.upload);
    router.get("/files", uploadController.getListFiles);
    router.get("/files/:name", uploadController.download);
    router.delete("/files/:name", uploadController.deleteFile);

    router.post("/model", modelController.addModel);
    router.put("/model/:id", modelController.updateModel);
    router.delete("/model/:id", modelController.deleteModel);
    router.get("/model", modelController.getModels);
    router.get("/model/:id", modelController.getModelById);


    app.use(router);
};

module.exports = routes;