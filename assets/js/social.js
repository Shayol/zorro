var contactAnimeTime = 0.5;
var contactAnimeFadeIn = 2;
var nav_buttons_RGB = 'rgb(0,0,0)';

function romanize(num){
    if (!+num)
        return false;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

var activate_a_message = function(leave_out_the_first,prevoius_or_next_message){

  if ($messages && $contact.hasClass('active')) {
    // We don't want to run this part the first time it is activated
    // So it shows the first post by default
    if ( ! leave_out_the_first) {
      var $active_message = $('.twttr-msg.twttr-active:not(.twttr-inactive)');

      $('.twttr-msg.twttr-inactive').removeClass('twttr-active twttr-inactive');

      // There is no active message yet
      if ($active_message.length === 0) {
        
        TweenLite.to($messages.first().addClass('twttr-active'), contactAnimeFadeIn, {opacity: 1});
      } else {
        var $next = $active_message[prevoius_or_next_message]();

        TweenLite.to($active_message.addClass('twttr-inactive'), contactAnimeTime, {opacity: 0, onComplete: function(){

          TweenLite.to($next.length === 0 ? $messages[prevoius_or_next_message == 'next' ? 'first' : 'last']().addClass('twttr-active') : $next.addClass('twttr-active'), contactAnimeFadeIn, {opacity: 1});

          animateSocialTextTitles($messages);

        }});

      }
    }

  }

};

function animateSocialTextTitles($el,finishAllAnimations){

  if(typeof finishAllAnimations != 'undefined'){

    $el.find('div > p:first-child .socialText').stop(true,true).css({'left':'0px'});
    return;

    }

  $el.filter('.twttr-active.twttr-inactive').find(' > div > p:first-child .socialText').stop(true,true).css({'left':'0px'});

  var $socialTextTitle = $el.filter('.twttr-active:not(.twttr-inactive)').find(' > div > p:first-child .socialText');

      $socialTextTitle.animate({'left':-$socialTextTitle.width()+'px'},$socialTextTitle.width()*($(window).width() > 757 ? 15 : 19),function(){

       $socialTextTitle.css({'left':$socialTextTitle.parent().width()+'px'});

        animateSocialTextTitles($el);

        });

  }

$('#twttr-box').click(function(e){

  if(!/contactHyperlink$/.test(e.target.className)){

    activate_a_message(null,'next');
    e.stopPropagation();

    }

  }).swipe({

  swipe:function(event, direction, distance, duration, fingerCount){

    activate_a_message(null,direction == 'left' ? 'next' : 'prev');
    
    event.stopPropagation();

    }

  });

// Run the first activation
$.ajax({
  url: './facebook/',
  dataType: 'json',
  success: function(msgs){
    msgs = msgs['data'];

    var msgs_text = '';
    var i = 0;
    for (var msg in msgs) {

      var tmp_msg = msgs[msg].message || msgs[msg].story,
          tmp_date = msgs[msg].created_time.split(/[- T:+]/),
          date = new Date(tmp_date[0], tmp_date[1]-1, tmp_date[2], tmp_date[3], tmp_date[4], tmp_date[5]),
          date_str = '',
          link = 'https://www.facebook.com/sancholives/';

      date_str += romanize(date.getDate());
      date_str += ' &middot; ' + romanize(date.getMonth()+1) + ' &middot; ';
      date_str += romanize(date.getFullYear());

      msgs_text += ''
        + '<div class="twttr-msg' + (++i === 1 ? ' twttr-active' : '') + ' copy-bg-text"' + (i === 1 ? ' style="opacity:1"' : "") + '><div>'
          + '<p><a class="socialText" href="' + link + '" target="_blank" onclick="return false;">' + tmp_msg.replace(/(?:\n|\r).*/g,'') + '</a></p>'
          + '<p><a class="socialText contactHyperlink" href="' + link + '" target="_blank">' + date_str + '</a></p>'
        + '</div></div>';

      }
    
    $twitter_box.html(msgs_text);
    $messages = $twitter_box.find('.twttr-msg');

    $socialText = $('.socialText');

    }
  });
