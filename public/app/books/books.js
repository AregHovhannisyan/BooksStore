(function (angular) {
    'use strict';

    angular.module('bookStore')
        .factory('Books', ['$http', function ($http) {
            return {
                getList: function() {
                    return $http.get('/api/v1/books')
                },
                delete: function(bookId) {
                    return $http.put('/api/v1/books/favorites/delete', { book: bookId })
                },
                addToFavorites: function(bookId) {
                    return $http.put('/api/v1/books/favorites/add', { book: bookId })
                },
                getUserBooks: function() {
                    return $http.get('/api/v1/books/user')
                }
            }
        }]);
})(angular);

