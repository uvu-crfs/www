<!doctype html>
<html>
  <head>
    <title>Capitol Reef</title>
    <style> body {margin: 0;} </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" integrity="sha256-6ZFIKt0ohcBorQWIruhlYBoADBIFrJuXtEJsjFxb2Wk=" crossorigin="anonymous" />
    <link rel="stylesheet" href="/vendor/font-awesome.min.css"/>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css"></script>
  <!--  <link rel="stylesheet" href="//www.uvu.edu/_resources/css/style.css?v=3"></script>
    <link rel="stylesheet" href="//www.uvu.edu/_resources/css/styleMobile.css?v=3"></script>
    <link rel="stylesheet" href="//www.uvu.edu/_resources/css/styleTablet.css?v=3"></script> -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" charset="utf-8"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
    <link href="/vendor/select2.css" rel="stylesheet" />
    <script src="/vendor/select2.min.js"></script>
    <script src="/vendor/mithril.js"></script>
    <link rel="stylesheet" href="/main.css">
  </head>
  <body>
    <script>
      if (location.protocol !== 'https:') {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      }
      var g = {
        docker : "<?php echo getenv('docker'); ?>" == 'true',
        uvu : {
          loggedIn : "<?php echo strlen(getenv('displayName')) > 0; ?>" == '1',
          displayName : "<?php echo getenv('displayName'); ?>",
          mail : "<?php echo getenv('mail'); ?>",
          entitlements : "<?php echo getenv('uvuEntitlements'); ?>"
        },
      };
    </script>
    <script type="module"> import '/mithril/app.js';</script>
  </body>
</html>
