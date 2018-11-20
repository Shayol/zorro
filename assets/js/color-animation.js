var siteColors,
    initOnCPress = 0,
    resetColors,
    resetColorsPartially,
    changeColors,
    changeColorsPartially,
    changeColorsMobile,
    setColorsMain;

$(document).ready(function(){
	
	// build data object from site colors and animation speed ::

	siteColors = {
		taxiBg: $('.Color-taxi').css('background-color'),
		taxiText: $('.Color-taxi').css('color'),
		workBg: $('.Color-work').css('background-color'),
		workText: $('.Color-work').css('color'),
		contactBg: $('.Color-contact').css('background-color'),
		contactText: $('.Color-contact').css('color'),
		aboutBg: $('.Color-about').css('background-color'),
		aboutText: $('.Color-about').css('color'),
		animeSpeed : parseFloat($('.transitionTime').css('transition-duration'))
	}

	setTimeout(function(){
		//$('.taxi-logo-text').fadeIn();
		$('.content-text-taxi').animate({'opacity':1});
	}, 300);

});

var animateGradient = function(box) {

    setColorsMain(box == 'contact',box);

}