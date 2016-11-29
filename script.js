/*============= Top quote =============*/

$(window).scroll(function() {
        var scroll = $(window).scrollTop();
            $('.quote, .slogan').css({'opacity':(( 350-scroll )/350)+0.1}
					);
        });

/*============ Nav and Intro =========*/

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

/*  $(window).scroll(function() {
            var scroll = $(window).scrollTop();
                $('.intro').css({'opacity':(( 1500-scroll )/500)+0.1}
    					);
            });
*/

/*===========Hamburger =============*/

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();

/*===========Social=============*/
