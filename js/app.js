//--------------Navigation dropdown on Hover---------------

$(document).ready(function() {
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $('.navbar .dropdown').on('mouseover', function(){
                $(this).find('.dropdown-menu').addClass('show');
            }).on('mouseout', function(){
				$(this).find('.dropdown-menu').removeClass('show');
			});

			$('.dropdown-toggle').click(
				function(){
				  if ($(this).next().is(':visible')) {
					location.href = $(this).attr('href');;
				  }
				 });
        }
        else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
});

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

if($('.about-bg-circle').length > 0){
	gsap.to('.about-bg-circle',{rotation:360, duration: 100, repeat:-1});
}


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
// $(document).ready(function(){
//     $('.toggle-btn').on('click', function(){

//         $('.enquire-now-form').toggleClass('out')

//     });
// });


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


	$('.institute-slider, .event-slider').slick({
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
			slidesToShow: 4,
            slidesToScroll: 4,
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
                      slidesToShow: 4,
                      slidesToScroll: 4,
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



		//----------Leadership slider-------------

		$(document).ready(function(){
			$('.leadership-single').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				pauseOnFocus:false,
				pauseOnHover:false,
				autoplay:false,
				arrows:false,
				dots:false,
				infinite: false,
				mobileFirst: true,
				fade:true,
			});
		  });
		
		  $(document).ready(function(){
			$('.leadership-slider')
			.on('init', function(event, slick) {
				$('.leadership-slider .slick-slide.slick-current').addClass('is-active');
			})
			.slick({
				pauseOnFocus:false,
				pauseOnHover:false,
				autoplay:true,
				arrows:true,
				dots:false,
				infinite: true,
				mobileFirst: true,
				adaptiveHeight: false,
				prevArrow: '<div class="slick-prev white"><i class="fas fa-arrow-left" aria-hidden="true"></i></div>',
				nextArrow: '<div class="slick-next white"><i class="fas fa-arrow-right" aria-hidden="true"></i></div>',
				responsive: [
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
						slidesToShow: 5,
						slidesToScroll: 5,
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
		  });
		
		
		  $('.leadership-single').on('afterChange', function(event, slick, currentSlide) {
			$('.leadership-slider').slick('slickGoTo', currentSlide);
			var currrentNavSlideElem = '.leadership-slider .slick-slide[data-slick-index="' + currentSlide + '"]';
			$('.leadership-slider .slick-slide.is-active').removeClass('is-active');
			$(currrentNavSlideElem).addClass('is-active');
		});
		
		$('.leadership-slider').on('click', '.slick-slide', function(event) {
			event.preventDefault();
			var goToSingleSlide = $(this).data('slick-index');
		
			$('.leadership-single').slick('slickGoTo', goToSingleSlide);
		});


  //----------Career  Filter-------------

  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }

		

			$(".filter-button").removeClass("active");
	
			$(this).addClass("active");
    });


		});
		


		

		$(document).on('click', '.dropdown-menu', function (e) {
			e.stopPropagation();
		  });
		  
		  // make it as accordion for smaller screens
		  if ($(window).width() < 1200) {
			$('.dropdown-menu a.has-submenu').click(function(e){
			  	e.preventDefault();
				if($(this).next('.submenu').length){
				  $(this).next('.submenu').toggle();
				}
				$('.dropdown').on('hide.bs.dropdown', function () {
			   $(this).find('.submenu').hide();
			})
			});
		  }



		  
  //----------Marquee slider-------------






$(".marquee").kxbdMarquee({

	//"left", "right", "up", "down"
	direction: "up",
	loop: 0,
	// step size
	scrollAmount:1,

	// animation delay
	scrollDelay:30
  
  });

  
