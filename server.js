//? Core-module
const http = require("node:http");
//? Local-module
const bookController = require("./controller/bookController");
//!---------------------------------
// Create server
const server = http.createServer((req, res) => {
    if (req.url === "/books" && req.method === "GET") {
        bookController.getBooks().then((result) => {
            if (!result) {
                res.writeHead(404, {"ContentType": "application/json"});
                res.end(JSON.stringify({message: "Sorry, can not found books"}));
            } else {
                res.writeHead(200, {"Content-Type": "application/json"});
                res.end(JSON.stringify(result));
            }
        }).catch(() => {
            res.writeHead(404, {"ContentType": "application/json"});
            res.end(JSON.stringify({message: "Sorry, can not found books"}));
        });
    }
});
//? Create listener callback
//! I,m not use --Dotenv-- package in this project
server.listen(3000, () => {
    console.log("Server run on port 3000");
});
