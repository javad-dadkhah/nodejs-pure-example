//? Local-module
const model = require("./../model/Book");
//!--------------------------------------
const getBooks = (res) => {
    const books = model.findAll();
    if (books) {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(books));
    } else {
        res.writeHead(404, {"ContentType": "application/json"});
        res.end(JSON.stringify({message: "Sorry, can not found books"}));
    }
};
const addOneBook = (req,res) => {
    let reqBody = null;
    req.on("data", (data) => {
       reqBody = "";
       reqBody += data.toString();
    });
    req.on("end", () => {
        const result = model.insertOne(reqBody);
        if (result) {
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Add book successfully"}));
        } else {
            res.writeHead(500, {"ContentType": "application/json"});
            res.end(JSON.stringify({message: "Sorry, can not add book"}));
        }
    });
}
module.exports = {
    getBooks,
    addOneBook,
};