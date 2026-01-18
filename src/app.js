const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
// app.use(compression());
// init db

// init routes
app.get("/", (req, res, next) => {
  const strTest = "HELLO WORLD";
  return res.status(200).json({
    message: "Welcome my boy",
    metadata: strTest.repeat(1000000),
  });
});

// handling error

module.exports = app;
