console.log("You must be a developer");

var crfsApp = angular.module('crfsApp', ['ngRoute']);

crfsApp.config(function($routeProvider) {
    $routeProvider
        .when('/developer', {
            templateUrl : '/ang/pages/developer.html',
            controller  : 'developerController'
        })
    ;
});

crfsApp.controller('developerController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});
