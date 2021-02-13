$("[data-trigger]").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    var offcanvas_id =  $(this).attr('data-trigger');
    $(offcanvas_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
    $(".screen-overlay").toggleClass("show");
}); 

$(".btn-close, .screen-overlay").click(function(e){
    $(".screen-overlay").removeClass("show");
    $(".mobile-offcanvas").removeClass("show");
    $("body").removeClass("offcanvas-active");
}); 

// Form Toggle
$(document).ready(function(){
    $('.toggle-btn').on('click', function(){

        $('.enquire-now-form').toggleClass('out')

    });
});


$('.testimonial-slider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    
        
    });

    // Custom carousel nav
	$('.carousel-prev').click(function(){ 
		$('.slick-slider').slick('slickPrev');
	} );
	
	$('.carousel-next').click(function(e){
		e.preventDefault(); 
		$('.slick-slider').slick('slickNext');
	} );


 
    $('.gallery-slider').slick({

        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay:true,
        infinite: true,
        prevArrow: '<div class="slick-prev"><i class="fas fa-arrow-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fas fa-arrow-right" aria-hidden="true"></i></div>',
        responsive: [
			{
				breakpoint: 1600,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				}
			  },
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				}
			  },
			  {
				breakpoint: 1366,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,

				}
			  },
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
				breakpoint: 320,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
		  ]
            
        });

        $('.companies-slider').slick({

            slidesToScroll: 1,
            arrows: true,
            dots: false,
            autoplay:true,
            infinite: true,
            prevArrow: '<div class="slick-prev arrow-light"><i class="fas fa-arrow-left" aria-hidden="true"></i></div>',
            nextArrow: '<div class="slick-next arrow-light"><i class="fas fa-arrow-right" aria-hidden="true"></i></div>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 6,
                    }
                  },
                {
                    breakpoint: 1440,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 5,
                    }
                  },
                  {
                    breakpoint: 1366,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 5,
    
                    }
                  },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                    breakpoint: 320,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
              ]
                
            });