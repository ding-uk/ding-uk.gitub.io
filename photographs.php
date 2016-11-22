<?php
$pageTitle = "Photographs";
include("inc/header.php"); ?>

<div id="slider" class="sl-slider-wrapper">

	<div class="sl-slider">

		<div class="sl-slide bg-1">
			<div class="sl-slide-inner">
				<div class="deco" data-icon="H"></div>
				<h2>A bene placito</h2>
				<blockquote>
					<p>You have just dined...</p>
					<cite>Ralph Waldo Emerson</cite>
				</blockquote>
			</div>
		</div>

		<div class="sl-slide bg-2">
			<div class="sl-slide-inner">
				<div class="deco" data-icon="q"></div>
				<h2>Regula aurea</h2>
				<blockquote>
					<p>Until he extends the circle...</p>
					<cite>Albert Schweitzer</cite>
				</blockquote>
			</div>
		</div>

		<div class="sl-slide bg-2">
			<!-- ... -->
		</div>

		<!-- ... -->

	</div>

	<nav id="nav-arrows" class="nav-arrows">
		<span class="nav-arrow-prev">Previous</span>
		<span class="nav-arrow-next">Next</span>
	</nav>

	<nav id="nav-dots" class="nav-dots">
		<span class="nav-dot-current"></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</nav>

</div>

<?php include("inc/footer.php"); ?>
