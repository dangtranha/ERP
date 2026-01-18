"use strict";

const { default: mongoose } = require("mongoose");

const connectString = "mongodb://erp_user:erp123@localhost:27017/ERP";

mongoose
    .connect(connectString)
    .then((_) => console.log("Connected MONGODB SUCCESS"))
    .catch((err) => console.log("Failed To Conect MONGODB"));

//dev
if (1 === 1) {
    mongoose.set("debug", true);
    mongoose.set("debug", { color: true });
}
// module.exports = mongoose;
