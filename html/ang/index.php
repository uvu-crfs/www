<!-- index.html -->
    <!DOCTYPE html>


    <?php
      $developer = false;
      if (isset($_GET['dev'])) {
          $developer = true;
      }
    ?>

    <!-- define angular app -->
    <html ng-app="crfsApp">
    <head>
      <title>CRFS Admin</title>
      <!-- load bootstrap, fontawesome and c3 via CDN -->
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.css" />
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css"></script>

      <!-- load angular, d3 and c3 via CDN -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.7/js/tether.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
      <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" charset="utf-8"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
      <script src="script.js"></script>

      <?php
      if ($developer) {
          echo '<script src="js/developer.js"></script>';
      } ?>
    </head>

    <!-- define angular controller -->
    <body ng-controller="mainController">
      <nav class="navbar navbar-light bg-faded">
        <a class="navbar-brand" href="#">CRFS</a>
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#/usage">Enter Usage</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/visit">Visits</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/group">Groups <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/sensor">Sensors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/reports">Reports</a>
          </li>
          <?php
            if ($developer) {
                echo '<li class="nav-item">';
                echo '<a class="nav-link" href="#/developer">Developer</a>';
                echo '</li>';
            }
          ?>
        </ul>

        <!--
        <ul class="pull-right">
          <li class="nav-item"><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
        -->
      </nav>
    <!-- MAIN CONTENT AND INJECTED VIEWS -->
    <div id="main">
        <div ng-view></div>
    </div>
