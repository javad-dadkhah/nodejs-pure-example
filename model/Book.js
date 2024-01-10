//? Core-module
const fs = require("node:fs");
//? Local-module
const db = require("./../db.json");
//!--------------------------------
const findAll = async () => {
    return db.book;
};
module.exports = {
    findAll,
}