//? Local-module
const model = require("./../model/Book");
//!--------------------------------------
const getBooks = async () => {
    const books = await model.findAll();
    if (books === null || books === undefined) {
        return false;
    }
    return books;
};
module.exports = {
    getBooks,
};