"use strict";

const { default: mongoose } = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
// count connection
const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection::${numConnection}`);
};

//check overload
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoriesUseage = process.memoryUsage().rss;
        // Example maxium number of connections based on number of cores
        const maxConnections = numCores * 5;
        console.log(`Active connection:: ${numConnection}`);
        console.log(`Memory usage:: ${memoriesUseage / 1024 / 1024} MB`);
        if (numConnection > maxConnections)
            console.log(`Connection overload detected!!!!!`);
    }, _SECONDS); // Monitor every 5s
};

module.exports = {
    countConnect,
    checkOverload,
};
