<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/php; charset=UTF-8" />
		<title>CRFS</title>
		<script>if (location.protocol !== 'https:') location.href = `https:${window.location.href.substring(window.location.protocol.length)}`; </script>
		<?php
			echo file_get_contents('https://uvu.edu/_resources/includes/styles.inc');
			echo file_get_contents('https://uvu.edu/_resources/includes/headerscripts.inc');
			echo file_get_contents('https://uvu.edu/_resources/includes/footerscripts.inc');
		?>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" integrity="sha256-6ZFIKt0ohcBorQWIruhlYBoADBIFrJuXtEJsjFxb2Wk=" crossorigin="anonymous" />
    <link rel="stylesheet" href="/main.css">
		<link rel="stylesheet" href="https://uvu.edu/_resources/galleries/flex-slider/flexslider.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.css"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js" charset="utf-8"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/c3/0.4.11/c3.min.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/traceur.js"></script>
    <script src="https://google.github.io/traceur-compiler/bin/BrowserSystem.js"></script>
    <script src="https://google.github.io/traceur-compiler/src/bootstrap.js"></script>
    <link href="/vendor/select2.css" rel="stylesheet" />
    <script src="/vendor/select2.min.js"></script>
    <link rel="stylesheet" href="/vendor/pikaday.css">
    <script src="/vendor/pikaday.js"></script>
    <script src="/vendor/mithril.js"></script>
	</head>
	<body>
		<div style="height:0px; width:0px;"></div>
		<div id="wrapper">
			<div id="container">
				<div id="header">
					<div class="consCont">
						<div id="logoAndTitle">
							<div id="mquery"></div>
							<div id="logo"><a href="http://www.uvu.edu">&nbsp;</a></div>
							<div id="pageTitle">
								<p><a href="http://www.uvu.edu/crfs" title="Capitol Reef Field Station"><span>Capitol Reef Field Station</span></a></p>
							</div>
							<div class="clearfloat"></div>
						</div>
					</div>
					<div class="clearfloat"></div>
				</div>
				<div class="contentArea">
					<div id='mithril'>
            <div id='loadSpace'>
              <div id='loading' class='fa fa-eercast fa-spin fa-5x' aria-hidden="true"></div>
            </div>
					</div>
					<div class="clearfloat"></div>
				</div>
				<div id="footer">
					<div class="fadeSep"></div>
					<div id="footerSchool">
						<div class="consCont">
							<div class="footerAddress">
								<div class="footinfowrap">
									<a title="Utah Valley University" href="http://maps.google.com/?ll=40.278969,-111.717825&amp;spn=0.019579,0.033388&amp;t=m&amp;z=15">
									<span class="addressText">800&nbsp;West&nbsp;University&nbsp;Parkway,&nbsp;Orem,&nbsp;UT&nbsp;84058</span></a>
									<span class="addressText">(801)&nbsp;863-INFO&nbsp;(4636)</span> <a href="http://www.uvu.edu/copyright/">
									<span class="addressText">Copyright&nbsp;©&nbsp;<?php echo date("Y"); ?></span></a> <a href="http://www.uvu.edu/rights/">
									<span class="addressText disclaimer">Rights&nbsp;&amp;&nbsp;Responsibilities</span></a>
									<h4><a>UTAH VALLEY UNIVERSITY</a></h4>
								</div>
							</div>
						</div>
					</div>
					<div id="ob">
						<a href="http://www.uvu.edu" target="_top"></a>
					</div>
					<div class="clearfloat"></div>
				</div>
				<div id="footerShadow"></div>
			</div>
		</div>
		<script>
      if (location.protocol !== 'https:') { location.href = 'https:' + window.location.href.substring(window.location.protocol.length); }
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
