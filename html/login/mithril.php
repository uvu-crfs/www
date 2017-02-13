<!-- Mithril API: http://mithril.js.org/api.html -->
<!doctype html>
<html>
  <head>
    <title>CRFS Admin</title>
    <style> body {margin: 0;} </style>
  </head>
  <body>
    <script src="http://unpkg.com/mithril/mithril.js"></script>
    <div id="header"></div><script src="mithril/header.js"></script>
    <div id="app"></div><script src="mithril/app.js"></script>

    <div style="border: 1px solid black; padding: 5px">
      None Mithril stuff:
      <br><?php echo 'PHP: HTML page'; ?>
      <br><?php echo 'displayName: '.getenv('displayName'); ?>
    </div>

    <script>
      var username = "<?php echo getenv('displayName'); ?>";
      console.log(username);
    </script>
  </body>
</html>
