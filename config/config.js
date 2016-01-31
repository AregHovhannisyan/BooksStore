'use strict';

module.exports = {
  shared: {
    apiVersion: '1'
  },

  local: {
    db: 'mongodb://localhost/bookStore'
  },

  testing: {
    db: 'mongodb://localhost/bookStore-testing'
  },

  staging: {
    db: 'mongodb://localhost/bookStore'
  },


  production: {
    db: 'mongodb://localhost/bookStore'
  }
};