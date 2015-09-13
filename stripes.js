$(document).ready((function(){
  setInterval(function(){
    var colors = [
    '#D2100B', 
    '#F5892d', 
    '#F5AE2D', 
    '#BEC400', 
    '#86C40A',
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


}));


$.fn.moveIt = function(){
  var $els = $(this);
  var $window = $(window);
  var scrollPos = $window.scrollTop();
  
  $window.on('scroll', function(){
    scrollPos = $window.scrollTop();
    $els.each(moveEl);
  });
  
  function moveEl(){
    var $this = $(this);
    var scrollSpeed = $this.data('scroll-speed');
    var elPos = scrollPos / scrollSpeed;

    $this.css('transform', 'translateY(-' + elPos + 'px)');
  }
}

$(function(){
  $('[data-scroll-speed]').moveIt();
});
