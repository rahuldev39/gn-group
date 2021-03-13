//---------Fill Page Scroll---------------
if($('#fullpage').length > 0){
	var myFullpage = new fullpage('#fullpage', {
		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: true,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: false,
		verticalCentered: true,
		paddingTop: '115px',
		//paddingBottom: '10px',
		fixedElements: '#header',
		responsiveWidth: 1024,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',

	});
}

gsap.to('.about-bg-circle',{rotation:360, duration: 100, repeat:-1});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
	trigger:'main',
	start:'10% 10%',
	toggleClass:{targets:'nav', className:'nav-active'}
});


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


$('.hero-slider').slick({
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay:true,
});

$('.student-placed-slider').slick({
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay:true,
});
$('.campus-drive-slider').slick({
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	autoplay:true,
});
$('.testimonial-slider').slick({

    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    autoplay:true,
	infinite: false,
    });

    // Custom carousel nav
	$('.carousel-prev').click(function(){ 
		$('.slick-slider').slick('slickPrev');
	} );
	
	$('.carousel-next').click(function(e){
		e.preventDefault(); 
		$('.slick-slider').slick('slickNext');
	} );


	$('.institute-slider').slick({
		slidesToShow: 5,
        slidesToScroll: 5,
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
				  slidesToShow: 5,
				  slidesToScroll: 5,
				}
			  },
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				}
			  },
			  {
				breakpoint: 1366,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,

				}
			  },
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
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
				slidesToShow: 1,
				slidesToScroll: 1
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

 
    $('.gallery-slider').slick({
		slidesToShow: 5,
        slidesToScroll: 5,
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
				  slidesToShow: 5,
				  slidesToScroll: 5,
				}
			  },
			{
				breakpoint: 1440,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				}
			  },
			  {
				breakpoint: 1366,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,

				}
			  },
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
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
				slidesToShow: 1,
				slidesToScroll: 1
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

        $('.companies-slider1').slick({
			slidesToShow: 6,
            slidesToScroll: 6,
			speed: 0,
            arrows: false,
            dots: false,
            autoplay:true,
            infinite: true,
			cssEase: 'linear',
			draggable:false,
			autoplaySpeed:5000,
			pauseOnHover:false,
			rows:3,
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
                      slidesToShow: 4,
                      slidesToScroll: 4,
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
                    slidesToScroll: 3,
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                  }
                },
                {
                    breakpoint: 320,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  }
              ]
                
            });

		