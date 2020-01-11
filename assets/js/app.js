//   parallax

var parallaxContainer = $('parallax'),
  parallaxLayer = $('.parallax').find('.parallax__layer');


var moveLayers = function (e) {
  // console.log(e);

  //Определяем координаты курсора мышки
  var pageX = e.pageX,
    pageY = e.pageY;

    // (window.innerWidth/2)  -- Находим центр окна по оси Х
  var initialX = (window.innerWidth/2) - pageX,   // Если initialX будет положительным, значит курсор движется влево от центра, если отрицательным то вправо от центра
    initialY = (window.innerHeight/2) - pageY;  // // Если initialY будет положительным, значит курсор движется вверх от центра, если отрицательным то вниз от центра


  parallaxLayer.map(function (index,value) {   // Делаем массив из всех слоев параллакса и перебираем их, value это каждый слой отдельно
    var bottomPosition = ((window.innerHeight/2)*(index/100)),  // чем больше индекс слоя тем больше коэффициент
      widthPosition = initialX*(index/100),
      heightPosition = initialY*(index/100);
    // console.log(index);
    $(value).css( {
      'bottom': '-' + bottomPosition + 'px',
      'transform': 'translate3d('+widthPosition+'px, '+heightPosition+'px, 0)'
    });
  });

  
}

window.addEventListener('mousemove', moveLayers);

// конец parallax

$(document).ready(function(){

// При клике на ссылку "Авторизоваться", прячем эту ссылку и 
// переворачиваем flip-container (добавляем класс .flip)

  $('.welcome-login').on('click', function(e) {
    e.preventDefault();
    $(this).css('display','none');
    $('.flip-container').addClass('flip');
  });

  // По клику на ссылку "На главную" переворачиваем flip-container (удаляем класс .flip) и
  // показваем сслку "Авторизоваться"

  $('#index-page').on('click', function(e) {
    e.preventDefault();
    $('.flip-container').removeClass('flip');
    $('.welcome-login').css('display','block');
  });

  /////////////////////////////////////////////////////////////////////////////////////

  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.full-screen-menu').css('display','none');
    } else {
      $(this).addClass('active');
      $('.full-screen-menu').css('display','flex');
    }
  });

/////////////////////////////////////////////////////////////////////////////////////

});