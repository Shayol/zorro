// nothing except taxi and some wars are needed

var $twitter_box = $('#twttr-box'),
    $messages = null,
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

var $taxi = $('#taxi'),
    $work = $('#work'),
    $about = $('#about'),
    $contact = $('#contact'),
    $box = $('.box'),
    $socialText = $('#twttr-box .copy-bg-text'),
    $currentRGB = $('#current-rgb'),
    $section_expanded_portrait = widthForMobileSectionExpanded + "%",
    $section_portrait = widthForMobileSection + "%",
    $font_size = fontSize + "px",
    $font_size_mobile = fontSizeMobile + "px",
    initOnSpacebar = 1,
    changeTaxi,
    browserIsSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
    transitionEnd = browserIsSafari ? 'webkitTransitionEnd' : 'transitionend';

function activate_elm_modification($el){

    TweenLite.to($el.find('.content-text'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1',
        opacity: '1'
    });
    TweenLite.to($el.find('.hover-text'), siteColors.animeSpeed, {
        opacity: '0',
        fontSize: '1px'
    });
    animateGradient($el[0].id);

    }

function activate_box_modified($el){

    activate_box($el);
    changeTaxi($el[0]);
    elmBefore = $el;

    switch($el.attr('id')){
        case 'taxi': initOnSpacebar = 1;
        break;
        case 'work': initOnSpacebar = 2;
        break;
        case 'contact': initOnSpacebar = 3;
        break;
        case 'about': initOnSpacebar = 4;
        break;
        }

    }

function activate_box($el) {

    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);

    $box.removeClass('active inactive-side inactive-up-down');
    $box.not($el).addClass('small');

    $el.addClass('active');
    TweenLite.to($('.content-text:not(.content-text-taxi)'), siteColors.animeSpeed -0.3, {
        opacity: '0'
    });
    TweenLite.to($box.not('.active').find('.content-text:not(.content-text-taxi)'), siteColors.animeSpeed, {
        scaleX: '0.01',
        scaleY: '0.01'
    });
    TweenLite.to($box.not('.active').find('.hover-text'), siteColors.animeSpeed, {
        opacity: '1',
        fontSize: orientationMobile ? $font_size_mobile : $font_size
    });
    TweenLite.to($box.not('.active').find('.content-text-taxi'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1'
    });

    $box.find('.content-text-taxi')[!$el.is('#taxi') ? 'addClass' : 'removeClass']('content-text-taxi-not-active');

    if(!orientationPortrait){

        if ($el.is('#taxi')) {       
            TweenLite.to($el, siteColors.animeSpeed, {
                bottom: '20%',
                right: '20%'
            });
            TweenLite.to($work, siteColors.animeSpeed, {
                bottom: '20%',
                left: '80%'
            });        
            TweenLite.to($about, siteColors.animeSpeed, {
                right: '20%',
                top: '80%'
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                left: '80%',
                top: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#work')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                bottom: '20%',
                left: '20%'
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                bottom: '20%',
                right: '80%'
            });        
            TweenLite.to($about, siteColors.animeSpeed, {
                right: '80%',
                top: '80%'
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                left: '20%',
                top: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#about')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                right: '20%',
                top: '20%'
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                bottom: '80%',
                right: '20%'
            });        
            TweenLite.to($work, siteColors.animeSpeed, {
                left: '80%',
                bottom: '80%'
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                top: '20%',
                left: '80%'
            });
            activate_elm_modification($el);
        } else if ($el.is('#contact')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                left: '20%',
                top: '20%'
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                bottom: '80%',
                right: '80%'
            });        
            TweenLite.to($work, siteColors.animeSpeed, {
                left: '20%',
                bottom: '80%'
            });
            TweenLite.to($about, siteColors.animeSpeed, {
                top: '20%',
                right: '80%'
            });
            activate_elm_modification($el);
        }

    }else{

        if ($el.is('#taxi')) {       
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($work, siteColors.animeSpeed, {
                height: $section_portrait
            });        
            TweenLite.to($about, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#work')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                height: $section_portrait
            });        
            TweenLite.to($about, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#about')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                height: $section_portrait
            });        
            TweenLite.to($work, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($contact, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#contact')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($taxi, siteColors.animeSpeed, {
                height: $section_portrait
            });        
            TweenLite.to($work, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($about, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        }

    }

}

var elmBefore = $taxi;

$box.on('click', function(e) {

    var $this_ = $(this);

    if(!$this_.hasClass('active')){

        activate_box_modified($this_);

        e.stopPropagation();
        
        }

    });

$('body').on('keydown', function(e) {

    if(e.keyCode == 27) e.preventDefault();

});

$('body').on('keyup', function(e) {
    var $active = $('.box.active');

    switch (e.which ) {
        case 49: activate_box_modified($taxi);
        break;
        case 50: activate_box_modified($work);
        break;
        case 51: activate_box_modified($contact);
        break;
        case 52: activate_box_modified($about);
        break;
        case 32 :
            var e = $.Event("keyup");
            var boxKeyCode = parseInt($('.box.active').attr('key-code'));
            e.which = boxKeyCode == 52 ? 49 : boxKeyCode+1;
            $('body').trigger(e);    
    }

    // Esc
    if (e.which === 27) {
        activate_box_modified($taxi);
    }

    // Left
    else if (e.which === 37) {
        if ($active.is('#work')) {
            activate_box_modified($taxi);
        } else if ($active.is('#contact')) {
            activate_box_modified($about);
        }
    }
    // Up
    else if (e.which === 38) {
        if ($active.is('#about')) {
            activate_box_modified($taxi);
        } else if ($active.is('#contact')) {
            activate_box_modified($work);
        }
    }
    // Right
    else if (e.which === 39) {
        if ($active.is('#taxi')) {
            activate_box_modified($work);
        } else if ($active.is('#about')) {
            activate_box_modified($contact);
        }
    }
    // Down
    else if (e.which === 40) {
        if ($active.is('#taxi')) {
            activate_box_modified($about);
        } else if ($active.is('#work')) {
            activate_box_modified($contact);
        }
    }

});