<!-- Mithril API: http://mithril.js.org/api.html -->
<!doctype html>
<html>
  <head>
    <title>CRFS Admin</title>
    <style> body {margin: 0;} </style>
  </head>
  <body>
    <script src="//unpkg.com/mithril/mithril.js"></script>
    <script>
      var loggedIn = "<?php echo strlen(getenv('displayName')) > 0; ?>" == '1';
      var username = "<?php echo getenv('displayName'); ?>";
      var uvu = {
        displayName : "<?php echo getenv('displayName'); ?>",
        mail : "<?php echo getenv('mail'); ?>",
        entitlements : "<?php echo getenv('uvuEntitlements'); ?>"
      };
      console.log(username);
      console.log("loggedIn", loggedIn);
      console.log("uvu", uvu);
    </script>
    <div id="header"></div><script src="/mithril/header.js"></script>
    <div id="app"></div><script src="/mithril/app.js"></script>

    <div style="border: 1px solid black; padding: 5px">
      Non-Mithril stuff:
      <br><?php echo 'PHP: HTML page'; ?>
      <br><?php echo 'displayName: '.getenv('displayName'); ?>
    </div>
  </body>
</html>
