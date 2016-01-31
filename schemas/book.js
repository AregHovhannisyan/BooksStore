'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    name: {
        type: String
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },

    price: {
        type: Number,
        index: true
    },

    writtenDate: {
        type: Number
    },

    pagesCount: {
        type: Number
    },

    deleted: {
        type: Boolean,
        default: false,
        index: true
    },

    created: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Book', BookSchema);
