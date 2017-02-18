<!-- Mithril API: http://mithril.js.org/api.html -->
<!doctype html>
<html>
  <head>
    <title>Capitol Reef</title>
    <style> body {margin: 0;} </style>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" integrity="sha256-6ZFIKt0ohcBorQWIruhlYBoADBIFrJuXtEJsjFxb2Wk=" crossorigin="anonymous" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" charset="utf-8"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
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
