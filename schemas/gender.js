'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var GenderSchema = new Schema({
    name: {
        type: String,
        index: true
    },

    authors: [{
        type: Schema.Types.ObjectId,
        ref: 'Author'
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

GenderSchema.plugin(deepPopulate);

mongoose.model('Gender', GenderSchema);
