//? Core-module
const http = require("node:http");
//? Local-module
const bookController = require("./controller/bookController");
//!---------------------------------
// Create server
const server = http.createServer((req, res) => {
    if (req.url === "/books" && req.method === "GET") {
        bookController.getBooks(res);
    }

    else if (req.url === "/api/book/add" && req.method === "POST") {
        bookController.addOneBook(req,res);
    }
});
//? Create listener callback
//! I,m not use --Dotenv-- package in this project
server.listen(3000, () => {
    console.log("Server run on port 3000");
});
