const cors = require("cors");
const express = require("express");
const app = express();
const dovEnv = require('dotenv')

global.__basedir = __dirname;
dovEnv.config()
const port = process.env.PORT;
const appUrl = process.env.APP_URL;

const corsOptions = {
    origin: `${appUrl}:3000`
};

app.use(cors(corsOptions));
app.use(express.json());

const initRoutes = require("./src/route");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});
