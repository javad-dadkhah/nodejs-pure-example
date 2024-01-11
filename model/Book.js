//? Core-module
const fs = require("node:fs");
const path = require("node:path");
//? Local-module
const db = require("./../db.json");
//!--------------------------------
const findAll = async () => {
    return db.book;
};
const insertOne = (reqBody) => {
    const newBook = {
        id: "2",
       ...JSON.parse(reqBody)
    };
    db.book.push(newBook);
    fs.writeFileSync(`${path.join(__dirname, "..", "db.json")}`,
        JSON.stringify(db),
        {encoding: "utf-8",flush: true
        });
    return true;
}
module.exports = {
    findAll,
    insertOne,
}