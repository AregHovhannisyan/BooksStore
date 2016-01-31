(function (angular) {
    'use strict';
    angular.module('bookStore', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/books', {
                templateUrl: 'app/books/books.html',
                controller: 'BooksCtrl as booksCtrl'
            });
            $routeProvider.otherwise({redirectTo: '/books'});
        }]);
})(angular);

