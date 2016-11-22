$(window).scroll(function() {
        var scroll = $(window).scrollTop();
            $('.quote, .slogan').css({'opacity':(( 350-scroll )/350)+0.1}
					);
        });
