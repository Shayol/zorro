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
		animeSpeed : 1
	}

	setTimeout(function(){
		//$('.taxi-logo-text').fadeIn();
		$('.content-text-taxi').animate({'opacity':1});
	}, 300);

});

var animateGradient = function(box) {

    setColorsMain(box == 'contact',box);

}