const app = require("./src/app");

const PORT = process.env.PORT || 3052
const server = app.listen(PORT, () => {
    console.log(`welcome ERP App ${PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => {
        console.log(`Exit Server Express`)
        process.exit(0);
    });
});
