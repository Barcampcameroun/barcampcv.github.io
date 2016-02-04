/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid');
	}
	else{
		$('#site-nav').removeClass('navbar-solid');
	}
}

/*
 * SmoothScroll
*/

smoothScroll.init({
	offset:50
});

$('#clock').countdown('2016/03/05 08:00:00', function(event) {
   $(this).html(event.strftime('%D days %H:%M:%S'));
});
