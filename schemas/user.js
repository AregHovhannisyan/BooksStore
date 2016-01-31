'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var UserSchema = new Schema({
    fullName: {
        type: String,
        index: true
    },

    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],

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

UserSchema.plugin(deepPopulate);

mongoose.model('User', UserSchema);
