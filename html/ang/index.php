<!-- index.html -->
    <!DOCTYPE html>

    <!-- define angular app -->
    <html ng-app="crfsApp">
    <head>
      <!-- SCROLLS -->
      <!-- load bootstrap and fontawesome via CDN -->
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />

      <!-- SPELLS -->
      <!-- load angular via CDN -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
          <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
      <script src="script.js"></script>
    </head>

    <!-- define angular controller -->
    <body ng-controller="mainController">
      <div ng-include="'parts/header.html'"></div>
    <!-- MAIN CONTENT AND INJECTED VIEWS -->
    <div id="main">
        <div ng-view></div>
    </div>