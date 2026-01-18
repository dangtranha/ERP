const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const { countConnect, checkOverload } = require("./helpers/check.connection");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
checkOverload();
// init routes
app.get("/", (req, res, next) => {
    const strTest = "HELLO WORLD";
    return res.status(200).json({
        message: "Welcome my boy",
    });
});

// create develop branch
// handling error

module.exports = app;
