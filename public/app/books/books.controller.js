(function (angular) {
    'use strict';

    function isSelectedBook(books, book) {
        for (var i = books.length; i--;) {
            if (books[i]._id === book._id)
                return true;
        }

        return false;
    }

    function BooksCtrl($scope, Books) {
        this.$ = $scope;
        this.Books = Books;

        this.init();
    }

    BooksCtrl.prototype.init = function () {
         return this.Books.getList()
            .then(function (books) {
                this.$.books = books.data;
                return this.Books.getUserBooks();
            }.bind(this))
             .then(function (userBooks) {
                 for (var i = userBooks.data.length; i--;) {
                     userBooks.data[i].favorite = true;
                 }
                 this.$.userBooks = userBooks.data;
             }.bind(this));
    };

    BooksCtrl.prototype.toggleTreeList = function (item, event) {
        event.stopPropagation();
        item.selected = !item.selected;
    };

    BooksCtrl.prototype.selectBook = function(book) {
        if(isSelectedBook(this.$.userBooks, book)) {
            return;
        }
        this.$.userBooks.push(book);
    };

    BooksCtrl.prototype.addToFavorites = function(book) {
        if(book.favorite) {
            return;
        }

        return this.Books.addToFavorites(book._id)
            .then(function() {
                book.favorite = true;
            }.bind(this))
    };

    BooksCtrl.prototype.deleteFromFavorites = function(book) {
        if(!book.favorite) {
            this.$.userBooks = _.without(this.$.userBooks, book);
            return;
        }

        return this.Books.delete(book._id)
            .then(function() {
                book.favorite = false;
                this.$.userBooks = _.without(this.$.userBooks, book);
            }.bind(this))
    };

    angular.module('bookStore').controller('BooksCtrl', ['$scope', 'Books', BooksCtrl]);
})(angular);