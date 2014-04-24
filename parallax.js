var navIndex = 0;
var numOfSlides = 4;

$(window).load(function() {

	$(window).scroll(function() {
		scrollTop = $(window).scrollTop(); //gets top location of scrollbar
		//console.log('scrollTop: '+ scrollTop);

		if (scrollTop>= 0 && scrollTop<$("#slide2").offset().top ) {
			markNavLocation(0)	
		}
		else if (scrollTop>= $('#slide2').offset().top && scrollTop<$("#slide3").offset().top ) {
			markNavLocation(1)	
		}
		else if (scrollTop>= $('#slide3').offset().top && scrollTop<$("#slide4").offset().top ) {
			markNavLocation(2)	
		}
		else if (scrollTop>= $('#slide4').offset().top) { 
			markNavLocation(3)	
		}



	});

});

function markNavLocation(loc) {
	navIndex = loc;

	for(var i =0; i<numOfSlides; i++) {
		if (i == loc) {
			$('#nav-dots ul li').eq(i).addClass('active');
		}
		else {
			$('#nav-dots ul li').eq(i).removeClass('active');
		}
	}
}

function stepToSlide(num) {
	num = num.toString();

	var destY = $("#slide"+num).offset().top;

	$("#slide" + num).css('background-position', '50% 300px');
	$('html, body').animate( {scrollTop:destY} , 1150 );
	$("#slide" + num).animate( {'background-position-y':'0'}, 1000).delay(2000);
}

function next() {
	navIndex++
	if (navIndex> numOfSlides) {
		navIndex = numOfSlides;
	}
	else {
		stepToSlide(navIndex +1);
		//console.log("nav:" + navIndex);
	}
	
}

function previous() {
	navIndex--;
	if (navIndex<0) {
		navIndex = 0;
	}
	else {
		stepToSlide(navIndex + 1);
	//console.log("nav:" + navIndex);
	}

}