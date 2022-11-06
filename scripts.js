

AOS.init();



// Animate on Scroll
$(window).scroll(function(){
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

$('.navbar-nav>li>a').on('click', function(){
$('.navbar-collapse').collapse('hide');
});


// Change navbar text color of active nav item
$(document).ready(function () {
	$('ul.navbar-nav > li').click(function(e) {
	$('ul.navbar-nav > li').removeClass('active');
	$(this).addClass('active');		
		}); 
	});
