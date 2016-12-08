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
                controller  : 'usageController'
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

    var toUnixTime = function(date){
      if (typeof date !== "undefined")
        return Date.parse(date)/1000;
    };

    var unixToDate = function(unix_timestamp){
      return new Date(unix_timestamp*1000);
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

    function keyToLabel(key){
      switch (key) {
        case 'start_date': return "Start Date";
        case 'end_date': return "End Date";
        case 'days': return "Days";
        case 'nights': return "Nights";
        case 'students_female': return "Female Students";
        case 'students_male': return "Male Students";
        case 'advisors_female': return "Female Advisors";
        case 'advisors_male': return "Male Advisors";
        case 'evaluation_complete': return "Completed Evaluation";
        case 'summary_complete': return "Completed Summary";
        case 'notes': return "Notes";
        default: return key;
        }
    }

    function editedInputs(inputs, type){
      return inputs.map(function(i){
        i.id = type + '_'+ i.key;
        i.label = keyToLabel(i.key);
        return i;
      });
    }



    crfsApp.controller('visitController', function($scope, $http) {
        $scope.add = {};
        $scope.message = 'Look! This is a visit page.';
        $scope.allVisits = [];
        $scope.visitHeaders = [];
        $scope.editModal = {};


        $scope.inputs = [
          {type:"number", key:"group_id", placeholder:"Group ID"},
          {type:"datetime-local", key:"start_date", placeholder:"Arrival Time"},
          {type:"datetime-local", key:"end_date", placeholder:"Leaving Time"},
          {type:"number", key:"days", placeholder:"Enter start end"},
          {type:"number", key:"nights", placeholder:"Enter start end"},
          {type:"number", key:"students_female", placeholder:"Enter number of female students"},
          {type:"number", key:"students_male", placeholder:"Enter number of male students"},
          {type:"number", key:"advisors_female", placeholder:"Enter number of female advisors"},
          {type:"number", key:"advisors_male", placeholder:"Enter number of male advisors"},
          {type:"text", key:"evaluation_complete", placeholder:"Have they completed the evaluation"},
          {type:"text", key:"summary_complete", placeholder:"Has the summary been completed"},
          {type:"text", key:"notes", placeholder:"Notes"}
        ];
        $scope.addInputs = editedInputs($scope.inputs, "add");



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
          $scope.add.start_date = toUnixTime($scope.add.start_date);
          $scope.add.end_date = toUnixTime($scope.add.end_date);
          console.log($scope.add);
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


    crfsApp.controller('usageController', function($scope, $http) {
        $scope.add = {};
        $scope.message = 'Look! This is a sensor page.';
        $scope.allSensorData = [];
        $scope.sensorDataHeaders = [];
        $scope.editModal = {};

        $scope.unixToDate = unixToDate;


        $http({method: 'GET',url: '/api/sensor/types.php'})
          .then(function successCallback(response) {
              $scope.sensors = response.data;
          }, function errorCallback(response) {})
        ;

        $scope.getValues = function(id){
          $scope.add.sensor = id;
          $http({method: 'GET',url: '/api/sensor/values.php?sensor=' + id})
            .then(function successCallback(response) {
                $scope.sensors.forEach(function(sensor){
                  if (sensor.id === $scope.select) $scope.unit = sensor.unit;
                });
                $scope.allSensorData = response.data;
                $scope.sensorDataHeaders = getHeaders($scope.allSensorData);
            }, function errorCallback(response) {})
          ;
        };

        $scope.addSensorData = function(){
          if ($scope.add.timestamp) $scope.add.timestamp = toUnixTime($scope.add.timestamp);
          if ($scope.add.timestamp === null) delete $scope.add.timestamp;
          $http({
            method: 'POST',
            url: '/api/sensor/value.php',
            data: $scope.add
          }).then(function successCallback(response) {
            $scope.getValues($scope.add.sensor);
            $scope.add = {sensor: $scope.add.sensor};
            }, function errorCallback(response) {});
        };

        $scope.deleteValue = function(id){
          $http({
            method: 'DELETE',
            url: '/api/sensor/value.php',
            data: '{"sensor":'+$scope.select+',"id":'+id+'}'
          }).then(function successCallback(response) {
            $scope.getValues($scope.select);
            }, function errorCallback(response) {});
        };

        $scope.fillDeleteModal = function(json){
          $scope.deleteModal = json;
        };

    });
