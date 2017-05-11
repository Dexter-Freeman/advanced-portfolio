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




});

$(document).ready(function(){
  blur();
})
$(window).resize(function(){
  blur();
});

function blur() {
  var imgWidth = $('.blur__back').width(),
  	  imgHeight = $('.blur__back').height(),
      blurSection = $('.what-about'),
      blur = $('.blur-form'),
      posY = blurSection.offset().top - blur.offset().top, //   текущее положение элемента относительно документа.
      posX = blurSection.offset().left - blur.offset().left;
  
  blur.css({
      // 'background-size': imgWidth + 'px' + ' ' + 'auto',
      'background-size': 'auto' + ' ' + imgHeight + 'px',
      'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}



































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