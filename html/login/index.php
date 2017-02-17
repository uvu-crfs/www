<!-- Mithril API: http://mithril.js.org/api.html -->
<!doctype html>
<html>
  <head>
    <title>Capitol Reef</title>
    <style> body {margin: 0;} </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" integrity="sha256-6ZFIKt0ohcBorQWIruhlYBoADBIFrJuXtEJsjFxb2Wk=" crossorigin="anonymous" />
  </head>
  <body>
    <script src="//unpkg.com/mithril/mithril.js"></script>
    <script>
      var loggedIn = "<?php echo strlen(getenv('displayName')) > 0; ?>" == '1';
      var uvu = {
        displayName : "<?php echo getenv('displayName'); ?>",
        mail : "<?php echo getenv('mail'); ?>",
        entitlements : "<?php echo getenv('uvuEntitlements'); ?>"
      };
      var docker = "<?php echo getenv('docker'); ?>" == 'true';
    </script>
    <div id="app"></div><script src="/mithril/app.js"></script>
  </body>
</html>
