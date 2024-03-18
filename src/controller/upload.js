const uploadFile = require("../middleware/upload");
const fs = require("fs");
const dotEnv = require('dotenv')
dotEnv.config()

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        const fileInfo = {
            name: req.file.originalname,
            url: process.env.APP_URL + ':' + process.env.PORT + '/files/' + req.file.originalname,
        };

        res.status(200).send(fileInfo);
    } catch (err) {
        res.status(500).send({
            message: `Could not upload the file : ${err}`,
        });
    }
};

const getListFiles = (req, res) => {
    const directoryPath = __basedir + "/public/";
    const baseUrl = process.env.APP_URL + '/'

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/public/";
    let options = {
        root: directoryPath,
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
};

module.exports = {
    upload,
    getListFiles,
    download,
};