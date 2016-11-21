	<footer>
		<div class="foot">
			&copy; <?php
				$copyYear = 2016; // Set your website start date
				$curYear = date('Y'); // Keeps the second year updated
				echo $copyYear . (($copyYear != $curYear) ? '-' . $curYear : '');
				?> Copyright.
		</div>
	</footer>

</div>

	<script   src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
	<script type="text/javascript" src="script.js"></script>
	</body>

</html>
