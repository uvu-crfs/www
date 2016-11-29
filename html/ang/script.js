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

            .when('/sensor', {
                templateUrl : 'pages/sensor.html',
                controller  : 'sensorController'
            })

            .when('/visit', {
                templateUrl : 'pages/visit.html',
                controller  : 'visitController'
            })

            .when('/reports', {
                templateUrl : 'pages/reports.html',
                controller  : 'groupController'
            })

            .when('/usage', {
                templateUrl : 'pages/usage.html',
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
        $scope.editModal = {};
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

        $scope.fillEditModal= function(group) {
            $scope.editModal.id = group.id;
            $scope.editModal.name = group.name;
            $scope.editModal.contact_name = group.contact_name;
            $scope.editModal.affiliation = group.affiliation;
            $scope.editModal.course_num = group.course_num;
            $scope.editModal.notes = group.notes;
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

        $scope.editGroup = function(){
          $http({
            method: 'PUT',
            url: '/api/group.php',
            data: $scope.editModal
          }).then(function successCallback(response) {
            $scope.getAllGroups();
            $scope.editModal = {};
            }, function errorCallback(response) {});
        };

    });

    crfsApp.controller('visitController', function($scope, $http) {
        $scope.add = {};
        $scope.message = 'Look! This is a visit page.';
        $scope.allVisits = [];
        $scope.visitHeaders = [];
        $scope.editModal = {};


        $scope.inputs = [
          {id:"addStartDate", label:"Start Date",type:"text", key:"start_date", placeholder:"Enter start date"},
          {id:"endStartDate", label:"End Date",type:"text", key:"end_date", placeholder:"Enter start end"}
        ];



        $scope.getAllVisits = function(){
          $http({
            method: 'GET',
            url: '/api/visits.php'
          }).then(function successCallback(response) {
              $scope.allVisits = response.data;
              $scope.visitHeaders = getHeaders($scope.allVisits);
            }, function errorCallback(response) {});
        };
        $scope.getAllVisits();

        $scope.fillDeleteModal = function(row){
          $scope.deleteModal = row;
        };

        $scope.fillEditModal = function(row){
          $scope.editModal = row;
        };

        $scope.deleteVisit = function(id){
          $http({
            method: 'DELETE',
            url: '/api/visit.php',
            data: '{"id":"'+id+'"}'
          }).then(function successCallback(response) {
            $scope.getAllVisits();
            }, function errorCallback(response) {});
        };

        $scope.addVisit = function(){
          $http({
            method: 'POST',
            url: '/api/visit.php',
            data: $scope.add
          }).then(function successCallback(response) {
            $scope.getAllVisits();
            $scope.add = {};
            }, function errorCallback(response) {});
        };

        $scope.editVisit = function(){
          $http({
            method: 'PUT',
            url: '/api/visit.php',
            data: $scope.editModal
          }).then(function successCallback(response) {
            $scope.getAllVisits();
            $scope.editModal = {};
            }, function errorCallback(response) {});
        };
    });

    crfsApp.controller('sensorController', function($scope, $http) {
        $scope.add = {};
        $scope.message = 'Look! This is a sensor page.';
        $scope.allSensors = [];
        $scope.sensorHeaders = [];
        $scope.editModal = {};

        $scope.getAllSensors = function(){
          $http({
            method: 'GET',
            url: '/api/sensor/types.php'
          }).then(function successCallback(response) {
              $scope.allSensors = response.data;
              $scope.sensorHeaders = getHeaders($scope.allSensors);
              //console.log(JSON.stringify(response));
            }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
            });
        };
        $scope.getAllSensors();

        $scope.fillDeleteModal = function(sensor){
          $scope.deleteModal = sensor;
        };

        $scope.fillEditModal = function(sensor){
          $scope.editModal.name = sensor.name;
          $scope.editModal.unit = sensor.unit;
          $scope.editModal.id   = sensor.id;
        };

        $scope.deleteSensor = function(id){
          $http({
            method: 'DELETE',
            url: '/api/sensor/type.php',
            data: '{"id":"'+id+'"}'
          }).then(function successCallback(response) {
            $scope.getAllSensors();
            }, function errorCallback(response) {});
        };

        $scope.addSensor = function(){
          $http({
            method: 'POST',
            url: '/api/sensor/type.php',
            data: $scope.add
          }).then(function successCallback(response) {
            $scope.getAllSensors();
            $scope.add = {};
            }, function errorCallback(response) {});
        };

        $scope.editSensor = function(){
          $http({
            method: 'PUT',
            url: '/api/sensor/type.php',
            data: $scope.editModal
          }).then(function successCallback(response) {
            $scope.getAllSensors();
            $scope.editModal = {};
            }, function errorCallback(response) {});
        };


    });
