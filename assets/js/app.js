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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICAgcGFyYWxsYXhcclxuXHJcbnZhciBwYXJhbGxheENvbnRhaW5lciA9ICQoJ3BhcmFsbGF4JyksXHJcbiAgICBwYXJhbGxheExheWVyID0gJCgnLnBhcmFsbGF4JykuZmluZCgnLnBhcmFsbGF4X19sYXllcicpO1xyXG5cclxuXHJcbnZhciBtb3ZlTGF5ZXJzID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGUpO1xyXG5cclxuICAgIC8v0J7Qv9GA0LXQtNC10LvRj9C10Lwg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LrRg9GA0YHQvtGA0LAg0LzRi9GI0LrQuFxyXG4gICAgdmFyIHBhZ2VYID0gZS5wYWdlWCxcclxuICAgICAgICBwYWdlWSA9IGUucGFnZVk7XHJcblxyXG4gICAgLy8gKHdpbmRvdy5pbm5lcldpZHRoLzIpICAtLSDQndCw0YXQvtC00LjQvCDRhtC10L3RgtGAINC+0LrQvdCwINC/0L4g0L7RgdC4INClXHJcbiAgICB2YXIgaW5pdGlhbFggPSAod2luZG93LmlubmVyV2lkdGgvMikgLSBwYWdlWCwgICAvLyDQldGB0LvQuCBpbml0aWFsWCDQsdGD0LTQtdGCINC/0L7Qu9C+0LbQuNGC0LXQu9GM0L3Ri9C8LCDQt9C90LDRh9C40YIg0LrRg9GA0YHQvtGAINC00LLQuNC20LXRgtGB0Y8g0LLQu9C10LLQviDQvtGCINGG0LXQvdGC0YDQsCwg0LXRgdC70Lgg0L7RgtGA0LjRhtCw0YLQtdC70YzQvdGL0Lwg0YLQviDQstC/0YDQsNCy0L4g0L7RgiDRhtC10L3RgtGA0LBcclxuICAgICAgICBpbml0aWFsWSA9ICh3aW5kb3cuaW5uZXJIZWlnaHQvMikgLSBwYWdlWTsgIC8vIC8vINCV0YHQu9C4IGluaXRpYWxZINCx0YPQtNC10YIg0L/QvtC70L7QttC40YLQtdC70YzQvdGL0LwsINC30L3QsNGH0LjRgiDQutGD0YDRgdC+0YAg0LTQstC40LbQtdGC0YHRjyDQstCy0LXRgNGFINC+0YIg0YbQtdC90YLRgNCwLCDQtdGB0LvQuCDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQvCDRgtC+INCy0L3QuNC3INC+0YIg0YbQtdC90YLRgNCwXHJcblxyXG5cclxuICAgICAgcGFyYWxsYXhMYXllci5tYXAoZnVuY3Rpb24gKGluZGV4LHZhbHVlKSB7ICAgLy8g0JTQtdC70LDQtdC8INC80LDRgdGB0LjQsiDQuNC3INCy0YHQtdGFINGB0LvQvtC10LIg0L/QsNGA0LDQu9C70LDQutGB0LAg0Lgg0L/QtdGA0LXQsdC40YDQsNC10Lwg0LjRhSwgdmFsdWUg0Y3RgtC+INC60LDQttC00YvQuSDRgdC70L7QuSDQvtGC0LTQtdC70YzQvdC+XHJcbiAgICAgICAgdmFyIGJvdHRvbVBvc2l0aW9uID0gKCh3aW5kb3cuaW5uZXJIZWlnaHQvMikqKGluZGV4LzEwMCkpLCAgLy8g0YfQtdC8INCx0L7Qu9GM0YjQtSDQuNC90LTQtdC60YEg0YHQu9C+0Y8g0YLQtdC8INCx0L7Qu9GM0YjQtSDQutC+0Y3RhNGE0LjRhtC40LXQvdGCXHJcbiAgICAgICAgICAgIHdpZHRoUG9zaXRpb24gPSBpbml0aWFsWCooaW5kZXgvMTAwKSxcclxuICAgICAgICAgICAgaGVpZ2h0UG9zaXRpb24gPSBpbml0aWFsWSooaW5kZXgvMTAwKTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgICAgICAgJCh2YWx1ZSkuY3NzKCB7XHJcbiAgICAgICAgICAnYm90dG9tJzogJy0nICsgYm90dG9tUG9zaXRpb24gKyAncHgnLFxyXG4gICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGUzZCgnK3dpZHRoUG9zaXRpb24rJ3B4LCAnK2hlaWdodFBvc2l0aW9uKydweCwgMCknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICBcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpO1xyXG5cclxuLy8g0LrQvtC90LXRhiBwYXJhbGxheFxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcbi8vINCf0YDQuCDQutC70LjQutC1INC90LAg0YHRgdGL0LvQutGDIFwi0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wiLCDQv9GA0Y/Rh9C10Lwg0Y3RgtGDINGB0YHRi9C70LrRgyDQuCBcclxuLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCBmbGlwLWNvbnRhaW5lciAo0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgLmZsaXApXHJcblxyXG5cdCQoJy53ZWxjb21lLWxvZ2luJykub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKHRoaXMpLmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7XHJcblx0XHQkKFwiLmZsaXAtY29udGFpbmVyXCIpLmFkZENsYXNzKFwiZmxpcFwiKTtcclxuXHR9KTtcclxuXHJcbi8vINCf0L4g0LrQu9C40LrRgyDQvdCwINGB0YHRi9C70LrRgyBcItCd0LAg0LPQu9Cw0LLQvdGD0Y5cIiDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdC8IGZsaXAtY29udGFpbmVyICjRg9C00LDQu9GP0LXQvCDQutC70LDRgdGBIC5mbGlwKSDQuFxyXG4vLyDQv9C+0LrQsNC30LLQsNC10Lwg0YHRgdC70LrRgyBcItCQ0LLRgtC+0YDQuNC30L7QstCw0YLRjNGB0Y9cIlxyXG5cclxuXHQkKFwiI2luZGV4LXBhZ2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKFwiLmZsaXAtY29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiZmxpcFwiKTtcclxuXHRcdCQoJy53ZWxjb21lLWxvZ2luJykuY3NzKFwiZGlzcGxheVwiLFwiYmxvY2tcIik7XHJcblx0fSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4kKCcuaGFtYnVyZ2VyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUnKS5jc3MoJ2Rpc3BsYXknLCdmbGV4Jyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgIGJsdXIoKTtcclxuXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4vLyAgIGJsdXIoKTtcclxuLy8gfSk7XHJcblxyXG4vLyBmdW5jdGlvbiBibHVyKCkge1xyXG4vLyAgIHZhciBpbWdXaWR0aCA9ICQoJy5ibHVyX19iYWNrJykud2lkdGgoKSxcclxuLy8gICBcdCAgaW1nSGVpZ2h0ID0gJCgnLmJsdXJfX2JhY2snKS5oZWlnaHQoKSxcclxuLy8gICAgICAgYmx1clNlY3Rpb24gPSAkKCcud2hhdC1hYm91dCcpLFxyXG4vLyAgICAgICBibHVyID0gJCgnLmJsdXItZm9ybScpLFxyXG4vLyAgICAgICBwb3NZID0gYmx1clNlY3Rpb24ub2Zmc2V0KCkudG9wIC0gYmx1ci5vZmZzZXQoKS50b3AsIC8vICAg0YLQtdC60YPRidC10LUg0L/QvtC70L7QttC10L3QuNC1INGN0LvQtdC80LXQvdGC0LAg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INC00L7QutGD0LzQtdC90YLQsC5cclxuLy8gICAgICAgcG9zWCA9IGJsdXJTZWN0aW9uLm9mZnNldCgpLmxlZnQgLSBibHVyLm9mZnNldCgpLmxlZnQ7XHJcbiAgXHJcbi8vICAgYmx1ci5jc3Moe1xyXG4vLyAgICAgICAnYmFja2dyb3VuZC1zaXplJzogaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nLFxyXG4vLyAgICAgICAvLyAnYmFja2dyb3VuZC1zaXplJzogJ2F1dG8nICsgJyAnICsgaW1nSGVpZ2h0ICsgJ3B4JyxcclxuLy8gICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiBwb3NYICsgJ3B4JyArICcgJyArIHBvc1kgKyAncHgnXHJcbi8vICAgfSlcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIChmdW5jdGlvbigpIHtcclxuLy8gICAndXNlIHN0cmljdCc7XHJcblxyXG4vLyAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbi8vICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcclxuLy8gICAvLyB9LCAxMDAwKTtcclxuXHJcbi8vICAgJChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB5bWFwcy5yZWFkeShpbml0KTtcclxuLy8gICAgIHZhciBteU1hcDtcclxuXHJcbi8vICAgICBmdW5jdGlvbiBpbml0KCl7XHJcbi8vICAgICAgICAgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuLy8gICAgICAgICAgICAgY2VudGVyOiBbNTkuOTM5MTY5OTg2OTIxNzQsMzAuMzA5MDE1MDk2NzMyNjIyXSxcclxuLy8gICAgICAgICAgICAgem9vbTogMTEsXHJcbi8vICAgICAgICAgICAgIGNvbnRyb2xzIDogW10sXHJcbi8vICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIHZhciBjb29yZHMgPSBbXHJcbi8vICAgICAgICAgICAgICAgICBbNTkuOTQ1NTQzMjc5ODkyODcsMzAuMzg5MzUyNjIxMTQ2NjhdLFxyXG4vLyAgICAgICAgICAgICAgICAgWzU5LjkxMTQyMzIzNTYzOTA5LDMwLjUwMDI0NTg3MDY1ODQxXSxcclxuLy8gICAgICAgICAgICAgICAgIFs1OS44ODY5MzE2MTc4NDYwNiwzMC4zMTk2NTgxMDIxMDM3MTNdLFxyXG4vLyAgICAgICAgICAgICAgICAgWzU5Ljk3MDMzNTc0ODIxNjcyLDMwLjMxNTE5NDkwNjMwMjkyNF0sXHJcbi8vICAgICAgICAgICAgIF0sXHJcbi8vICAgICAgICAgICAgIG15Q29sbGVjdGlvbiA9IG5ldyB5bWFwcy5HZW9PYmplY3RDb2xsZWN0aW9uKHt9LCB7XHJcbi8vICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4vLyAgICAgICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG4vLyAgICAgICAgICAgICAgICAgLy8gaWNvbkltYWdlSHJlZjogJy4uL2ltZy9pY29ucy9tYXBfbWFya2VyLnN2ZycsXHJcbi8vICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbNDYsIDU3XSxcclxuLy8gICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0yNiwgLTUyXVxyXG4vLyAgICAgICAgICAgICB9KTtcclxuXHJcbi8vICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgbXlDb2xsZWN0aW9uLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3Jkc1tpXSkpO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlDb2xsZWN0aW9uKTtcclxuXHJcbi8vICAgICAgICAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG4vLyB9KSgpO1xyXG5cclxuIl19
