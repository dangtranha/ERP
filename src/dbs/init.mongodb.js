"use strict";
const { default: mongoose } = require("mongoose");
const { countConnect } = require("../helpers/check.connection");
const {db:{host,name,port,username,password}} = require('../configs/config.mongodb')
const connectString = `mongodb://${username}:${password}@${host}:${port}/${name}`;
console.log(`connectString`,connectString)
class Database {
    constructor() {
        this.connect();
    }
    connect(type = "mongodb") {
        mongoose
            .connect(connectString)
            .then((_) => {
                console.log("Connected Mongodb SUCCESS", countConnect());
            })
            .catch((error) => console.log("FAILED to connect Mongodb"));

        if (1 === 1) {
            mongoose.set("debug", true);
            mongoose.set("debug", { coler: true });
        }
    }
    static getInstance() {
        if (!Database.instance) Database.instance = new Database();
        return Database.instance;
    }
}
const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
