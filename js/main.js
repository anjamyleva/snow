// stiki header 
$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 200) $(".header-content").removeClass('fixed-header');
    else $(".header-content").addClass('fixed-header');
});


/*slowly scrol*/
 
$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});
/*slowly scrol*/
/*burger-menu*/ 
document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
}
/*burger-menu*/ 

$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  fade:true,
  autoplaySpeed: 2000
});

$('.logo-item').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false
});



$('.post-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true
});

