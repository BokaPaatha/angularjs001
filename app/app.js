require('angular')

var app = angular.module('app', [])

app.controller('MainController', function($scope) {
    $scope.message = 'Hello world from Angular. And this message can change on the fly. Once more. Yahoooooo.'
})