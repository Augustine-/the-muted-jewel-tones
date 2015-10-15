$(document).ready((function(){
  
  // Cycle through colors from an array
  setInterval(function(){
    var colors = [
    '#D2100B', 
    '#F5892d', 
    '#F5AE2D', 
    '#BEC400', 
    '#81BD09',
    '#078F58',
    '#077A7F',
    '#4353B7',
    '#6F47B3',
    '#AF1C08'
    ];
    shuffle(colors);

    for (var i = colors.length - 1; i >= 0; i--) {
      $('#' + i).css('background-color', colors[i]);
    };
  }, 3000);

  // shuffle an array
  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  $('.nav-link').on('click', function(){
    var section = this.id;
    var stripesAreUp = $('.move').length;
    if (stripesAreUp > 0) {
      moveStripesDown("and then back up again", section);
    } else {
      moveStripesUp(section);
    }
  });

  function animationDelay(){
    $('.nav-link').css('pointer-events', 'none');

    setTimeout(function(){
      $('.nav-link').css('pointer-events', 'initial');
    }, 1550);
  };

  function moveStripesUp(section){
    $('.' + section).show();
    $('.stripe').addClass('move');
    animationDelay();
  };

  function moveStripesDown(next_action, section){
    $('.stripe').removeClass('move');
    if(next_action == "and then back up again"){
      animationDelay();
      setTimeout(function(){ 
        $('.subsection').hide();
        moveStripesUp(section);
      }, 1550);
    }
  };

  $('.banner').on('click', function(){
    moveStripesDown();
    animationDelay();
  });

}));