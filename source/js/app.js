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

	$('.welcome-login').on("click", function(e) {
		e.preventDefault();
		$(this).css("display","none");
		$(".flip-container").addClass("flip");
	});

// По клику на ссылку "На главную" переворачиваем flip-container (удаляем класс .flip) и
// показваем сслку "Авторизоваться"

	$("#index-page").on("click", function(e) {
		e.preventDefault();
		$(".flip-container").removeClass("flip");
		$('.welcome-login').css("display","block");
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

// $(document).ready(function(){
//   blur();

// })


// $(window).resize(function(){
//   blur();
// });

// function blur() {
//   var imgWidth = $('.blur__back').width(),
//   	  imgHeight = $('.blur__back').height(),
//       blurSection = $('.what-about'),
//       blur = $('.blur-form'),
//       posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
//       posX = blurSection.offset().left - blur.offset().left;
  
//   blur.css({
//       'background-size': imgWidth + 'px' + ' ' + 'auto',
//       // 'background-size': 'auto' + ' ' + imgHeight + 'px',
//       'background-position': posX + 'px' + ' ' + posY + 'px'
//   })
// }






































// (function() {
//   'use strict';

//   // setTimeout(function() {
//   //   document.querySelector('.greating_picture').classList.add('m--show');
//   // }, 1000);

//   $(function () {
//     ymaps.ready(init);
//     var myMap;

//     function init(){
//         myMap = new ymaps.Map("map", {
//             center: [59.93916998692174,30.309015096732622],
//             zoom: 11,
//             controls : [],
//         });

//         var coords = [
//                 [59.94554327989287,30.38935262114668],
//                 [59.91142323563909,30.50024587065841],
//                 [59.88693161784606,30.319658102103713],
//                 [59.97033574821672,30.315194906302924],
//             ],
//             myCollection = new ymaps.GeoObjectCollection({}, {
//                 draggable: false,
//                 iconLayout: 'default#image',
//                 // iconImageHref: '../img/icons/map_marker.svg',
//                 iconImageSize: [46, 57],
//                 iconImageOffset: [-26, -52]
//             });

//         for (var i = 0; i < coords.length; i++) {
//             myCollection.add(new ymaps.Placemark(coords[i]));
//         }

//         myMap.geoObjects.add(myCollection);

//         myMap.behaviors.disable('scrollZoom');
//     }
// });

// })();

