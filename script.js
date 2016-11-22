$(window).scroll(function() {
        var scroll = $(window).scrollTop();
            $('.quote, .slogan').css({'opacity':(( 350-scroll )/350)+0.1}
					);
        });

				window.addEventListener("scroll", function() {
				    if (window.scrollY > 400) {
				        $('.nav').fadeIn(1500);
				    }
				    else {
				        $('.nav').fadeOut();
				    }
				},false);
