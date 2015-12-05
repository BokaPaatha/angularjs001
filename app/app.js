require('angular')
// This is neat. Export from the other js. Catch it in a variable here.
// It is starting to look a lot like C or something like that.
var MainController = require('./controllers/MainController')

var app = angular.module('app', [])

//This is the old way. 
//app.controller('MainController', function($scope) {
//    $scope.message = 'Hello world from Angular. And this message can change on the fly. Once more. Yahoooooo.'
//})

// This is the new way. No functionality coded here. 
app.controller('MainController', ['$scope', MainController])