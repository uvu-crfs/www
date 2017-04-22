<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/php; charset=UTF-8" />
		<title>Web Development Services | WDS | Home</title>
		<meta name="keywords"
		content="web, website, access, login, help, support, omni update, ou campus" />
		<meta name="description" content="Web Development Services" />

		<!-- header css here -->
		<?php
			// include_once ($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/styles.inc');
			echo file_get_contents('https://uvu.edu/_resources/includes/styles.inc')
		?>

		<link rel="stylesheet" href="/_resources/galleries/flex-slider/flexslider.css"
		type="text/css"
		media="screen" />
		<link type="text/css" rel="stylesheet" href="/wds/lib/css/dept.css" />
		<style type="text/css">
			#wrapper{
				width: 100%;
			}
			#footerSchool, .footerAddress{
				padding: 0;
				margin: 0;
			}
			.consCont {
				margin: 0 auto;
				max-width: 1100px;
				width: 100%;
			}
			#lHeaderShadow, #rHeaderShadow {
				display: none;
			}
			#header {
				background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 34%, rgba(182, 182, 182, 0) 53%, rgba(12, 12, 12, 0.39) 97%, rgba(0, 0, 0, 0.39) 100%) repeat scroll 0 0 #fff;
			}

		</style>
		<?php
			// include_once ($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/headerscripts.inc');
			echo file_get_contents('https://uvu.edu/_resources/includes/headerscripts.inc');
		?>


	</head>
	<body>
		<div style="height:0px; width:0px;"></div>


		<div id="wrapper">
			<div id="slideMenu">
				<!-- dept nav here -->
				<?php
				// include ($_SERVER['DOCUMENT_ROOT'].'/wds/lib/includes/nav-dept.inc');
				echo file_get_contents('https://uvu.edu/wds/lib/includes/nav-dept.inc');
				?>
			</div>

			<div id="container">

				<div id="header">
					<div class="consCont">
						<div id="logoAndTitle">
							<div id="mquery"></div>
							<div id="logo"><a href="http://www.uvu.edu">&nbsp;</a></div>

							<div id="pageTitle">
								<p><a href="http://www.uvu.edu/wds"><span>Web Development Services</span></a></p>
							</div>
							<div class="clearfloat"></div>
						</div>
					</div>

					<div class="clearfloat"></div>
					<div id="deptNavBar">
						<div class="consCont">
							<div id="deptNav" class="dropNav">
								<!-- dept nav here -->
								<?php
									// include ($_SERVER['DOCUMENT_ROOT'].'/wds/lib/includes/nav-dept.inc');
									echo file_get_contents('https://uvu.edu/wds/lib/includes/nav-dept.inc');
								?>
								<div class="clearfloat"></div>
							</div>
						</div>
					</div>
					<div class="clearfloat"></div>
					<div id="slideMenuSep"><a id="slideMenuButton">Menu</a></div>
				</div>
				<div class="contentArea">
					<div class="content_title">
						<h1>Content Title Here (optional)</h1>
					</div>
					<p>Main Content Here</p>
					<div class="clearfloat"></div>
				</div>
				<div id="footer">
					<div id="footerDept">
						<div class="consCont">

							<?php
							// include_once ($_SERVER['DOCUMENT_ROOT'].'/wds/lib/includes/footer-dept.inc');
							echo file_get_contents('https://uvu.edu/wds/lib/includes/footer-dept.inc');
							?>
						</div>
					</div>

					<div class="fadeSep"></div>
					<div id="footerSchool">
						<div class="consCont">
							<div class="footerAddress">
								<div class="footinfowrap"><a title="Utah Valley University" href="http://maps.google.com/?ll=40.278969,-111.717825&amp;spn=0.019579,0.033388&amp;t=m&amp;z=15"><span class="addressText">800&nbsp;West&nbsp;University&nbsp;Parkway,&nbsp;Orem,&nbsp;UT&nbsp;84058</span></a> <span class="addressText">(801)&nbsp;863-INFO&nbsp;(4636)</span> <a href="http://www.uvu.edu/copyright/"><span class="addressText">Copyright&nbsp;©&nbsp;2013</span></a> <a href="http://www.uvu.edu/rights/"><span class="addressText disclaimer">Rights&nbsp;&amp;&nbsp;Responsibilities</span></a>
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
		<?php
			// include_once ($_SERVER['DOCUMENT_ROOT'].'/_resources/includes/footerscripts.inc');
			echo file_get_contents('https://uvu.edu/_resources/includes/footerscripts.inc');
		?>
		<script language="JavaScript" type="text/javascript"
		src="/_resources/js/jquery.flexslider-min.js"></script>
		<script language="JavaScript" type="text/javascript" src="http://www.uvu.edu/wds/lib/js/dept.js"></script>
	</body>
</html>
