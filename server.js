//? Core-module
const http = require("node:http");
//? Create server
const server = http.createServer((req, res) => {

});
//? Create listener callback
//! I,m not use --Dotenv-- package in this project
server.listen(3000, () => {
    console.log("Server run on port 3000");
});
