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
    '#880788'
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
    $('.nav-link').css('pointer-events', 'none');
    if (stripesAreUp > 0) {
      moveStripesDown("and then back up again", section);
    } else {
      moveStripesUp(section);
    }
  });

  function moveStripesUp(section){
    console.log('stripes up');
    $('.' + section).show();
    $('.stripe').addClass('move');
    setTimeout(function(){
      $('.nav-link').css('pointer-events', 'initial');
    }, 2000);
  };

  function moveStripesDown(next_action, section){
    console.log('stripes down');
    $('.stripe').removeClass('move');
    if(next_action == "and then back up again"){
      setTimeout(function(){ 
        $('.subsection').hide();
        moveStripesUp(section);
      }, 2000);
    }
  };


  $('.banner').on('click', function(){
    moveStripesDown();
  });

}));


/*
1. move stripes down
2. hide old sections
3. reveal correct section
4. move stripes up

1. are stripes already down? if not, move them down
2. hide all subsections
3. reveal section as clicked on
4. move stripes up
*/