const express = require("express");
const router = express.Router();
const controller = require("../controller/upload");

let routes = (app) => {
    router.post("/upload", controller.upload);
    router.get("/files", controller.getListFiles);
    router.get("/files/:name", controller.download);

    router.post("/model", modelController.addModel);
    router.put("/model/:id", modelController.updateModel);
    router.delete("/model/:id", modelController.deleteModel);
    router.get("/model", modelController.getModels);
    router.get("/model/:id", modelController.getModelById);


    app.use(router);
};

module.exports = routes;