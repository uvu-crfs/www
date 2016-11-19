// script.js

    // create the module and name it crfsApp
    var crfs = angular.module('crfs', []);

    // create the controller and inject Angular's $scope
    crfsApp.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
