'use strict';

var BookHandler = require('../handlers/book');
var book = new BookHandler(require('../services/book'));

module.exports = function (app) {
    app.route('/books')
        .get(book.getAll.bind(book));

    app.route('/books/favorites/add')
        .put(book.addToFavorites.bind(book));

    app.route('/books/favorites/delete')
        .put(book.deleteFromFavorites.bind(book));

    app.route('/books/user')
        .get(book.gerUserBooks.bind(book));
};