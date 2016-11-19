// script.js

    // create the module and name it crfsApp
        // also include ngRoute for all our routing needs
    var crfsApp = angular.module('crfsApp', ['ngRoute']);

    // configure our routes
    crfsApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            .when('/group', {
                templateUrl : 'pages/group.html',
                controller  : 'groupController'
            })
        ;
    });

    // create the controller and inject Angular's $scope
    crfsApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });


    var getHeaders = function(all){
        if (all.length > 0 ){
            return Object.keys(all[0]);
        }
    };

    crfsApp.controller('groupController', function($scope, $http) {
        $scope.add = {};
        $scope.message = 'Look! I am an about page.';
        $scope.allGroups = [];
        $scope.groupHeaders = [];
        $scope.getAllGroups = function(){
          $http({
            method: 'GET',
            url: '/api/groups.php'
          }).then(function successCallback(response) {
              $scope.allGroups = response.data;
              $scope.groupHeaders = getHeaders($scope.allGroups);
              //console.log(JSON.stringify(response));
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };
        $scope.getAllGroups();

        $scope.fillDeleteModal = function(group){
          $scope.deleteModal = group;
        };

        $scope.deleteGroup = function(id){
          $http({
            method: 'DELETE',
            url: '/api/group.php',
            data: '{"id":"'+id+'"}'
          }).then(function successCallback(response) {
            $scope.getAllGroups();
            }, function errorCallback(response) {});
        };

        $scope.addGroup = function(){
          $http({
            method: 'POST',
            url: '/api/group.php',
            data: $scope.add
          }).then(function successCallback(response) {
            $scope.getAllGroups();
            $scope.add = {};
            }, function errorCallback(response) {});
        };
    });

    crfsApp.controller('sensorController', function($scope) {
        $scope.message = 'Look! This is a sensor page.';
        $scope.allSensors = [];

        $http({
            method: 'GET',
            url: '/api/sensor/types.php'
        }).then(function successCallback(response) {
            $scope.allSensors  = response;
            console.log(JSON.stringify(response));
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
    });
