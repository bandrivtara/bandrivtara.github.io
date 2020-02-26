$(function(){

$('.header_slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
    asNavFor: '.slider-dots',
})

$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header_slider',
});
  
$('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
        }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,
      }
  },
  {
    breakpoint: 480,
    settings: {
        slidesToShow: 1,
    }
},
    ]
});

$('.holder_slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows_right" src="img/arrows-right.svg" alt=""></img>',
});

$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.png" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.png" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});


let summ = $('.nights').val() * $('.summ').data('nights') + $('.summ').data('guests') * ($('.guests').val()-1);
$('.summ').html('$' + summ);

$('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + $('.summ').data('guests') * ($('.guests').val()-1);
    $('.summ').html('$' + summ);
})


$('.surfbord-box_circle').on('click', function(){
    $(this).toggleClass('active');
})

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('active');
})

new WOW().init();

});