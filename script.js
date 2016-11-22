/* Top quote */

$(window).scroll(function() {
        var scroll = $(window).scrollTop();
            $('.quote, .slogan').css({'opacity':(( 350-scroll )/350)+0.1}
					);
        });

/* Nav and Into */

window.addEventListener("scroll", function() {
	if (window.scrollY > 400) {
		$('.nav, .intro, .me').fadeIn(1500);
			}
				else {
				  $('.nav, .intro, .me').fadeOut();
				    }
		},false);


		$(function(){
		    $.fn.extend({
		      slideInLeft: function() {
		        return this.each(function() {
		            $(this).show().css({opacity: 0, position: 'relative', left: "-200px"});
		            $(this).animate({opacity: 1, left: 0}, 'slow');
		        });
		      }
		    });

		    $(".me").show().lazyload({
		        'effect': 'slideInLeft'
		    });
		});
