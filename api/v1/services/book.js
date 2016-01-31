'use strict';

var mongoose = require('mongoose-q')(require('mongoose'));
var Book = mongoose.model('Book');
var Author = mongoose.model('Author');
var Gender = mongoose.model('Gender');
var User = mongoose.model('User');

// GET all books.
// find all Genders, select authors, select books

exports.getBooks = function () {
    return Gender
        .find({ deleted: false })
        .select('-deleted -__v')
        .deepPopulate('authors authors.books authors.books.author')
        .execQ();
};

// GET all books from user favorite books list.

exports.getUserBooks = function () {
    return User.findOne({ deleted: false })
        .select('-deleted -__v')
        .deepPopulate('books books.author')
        .execQ()
};

// GET user.
// app works for only one user.

exports.getUser = function() {
    return User
        .findOne({})
        .select('-deleted -__v')
        .execQ();
};