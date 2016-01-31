'use strict';

function BookHandler(bookService) {
    this.service = bookService;
}

BookHandler.prototype.getAll = function (req, res, next) {
    this.service.getBooks()
        .then(function (books) {
            res.status(200).send(books);
        })
        .catch(next);
};

BookHandler.prototype.deleteFromFavorites = function (req, res, next) {
    this.service.getUser()
        .then(function(user) {
            var indexOfBook = user.books.indexOf(req.body.book);
            user.books.splice(indexOfBook, 1);

            return user.save()
        })
        .then(function() {
            res.status(200).end()
        })
        .catch(next);
};

BookHandler.prototype.addToFavorites = function (req, res, next) {
    this.service.getUser()
        .then(function(user) {
            user.books.push(req.body.book);

            return user.save()
        })
        .then(function(user) {
            res.status(200).send(user.books);
        })
        .catch(next);
};

BookHandler.prototype.gerUserBooks = function (req, res, next) {
    this.service.getUserBooks()
        .then(function(user){
            res.status(200).send(user.books)
        })
        .catch(next)
};

module.exports = BookHandler;