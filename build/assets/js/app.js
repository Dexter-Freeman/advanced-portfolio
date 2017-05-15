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
      'background-size': imgWidth + 'px' + ' ' + 'auto',
      // 'background-size': 'auto' + ' ' + imgHeight + 'px',
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDRgdGB0YvQu9C60YMgXCLQkNCy0YLQvtGA0LjQt9C+0LLQsNGC0YzRgdGPXCIsINC/0YDRj9GH0LXQvCDRjdGC0YMg0YHRgdGL0LvQutGDINC4IFxyXG4vLyDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdC8IGZsaXAtY29udGFpbmVyICjQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSAuZmxpcClcclxuXHJcblx0JCgnLndlbGNvbWUtbG9naW4nKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQodGhpcykuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcclxuXHRcdCQoXCIuZmxpcC1jb250YWluZXJcIikuYWRkQ2xhc3MoXCJmbGlwXCIpO1xyXG5cdH0pO1xyXG5cclxuLy8g0J/QviDQutC70LjQutGDINC90LAg0YHRgdGL0LvQutGDIFwi0J3QsCDQs9C70LDQstC90YPRjlwiINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10LwgZmxpcC1jb250YWluZXIgKNGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgLmZsaXApINC4XHJcbi8vINC/0L7QutCw0LfQstCw0LXQvCDRgdGB0LvQutGDIFwi0JDQstGC0L7RgNC40LfQvtCy0LDRgtGM0YHRj1wiXHJcblxyXG5cdCQoXCIjaW5kZXgtcGFnZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoXCIuZmxpcC1jb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJmbGlwXCIpO1xyXG5cdFx0JCgnLndlbGNvbWUtbG9naW4nKS5jc3MoXCJkaXNwbGF5XCIsXCJibG9ja1wiKTtcclxuXHR9KTtcclxuXHJcbiQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuZnVsbC1zY3JlZW4tbWVudScpLmNzcygnZGlzcGxheScsJ25vbmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcuZnVsbC1zY3JlZW4tbWVudScpLmNzcygnZGlzcGxheScsJ2ZsZXgnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBibHVyKCk7XHJcbn0pXHJcbiQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICBibHVyKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gYmx1cigpIHtcclxuICB2YXIgaW1nV2lkdGggPSAkKCcuYmx1cl9fYmFjaycpLndpZHRoKCksXHJcbiAgXHQgIGltZ0hlaWdodCA9ICQoJy5ibHVyX19iYWNrJykuaGVpZ2h0KCksXHJcbiAgICAgIGJsdXJTZWN0aW9uID0gJCgnLndoYXQtYWJvdXQnKSxcclxuICAgICAgYmx1ciA9ICQoJy5ibHVyLWZvcm0nKSxcclxuICAgICAgcG9zWSA9IGJsdXJTZWN0aW9uLm9mZnNldCgpLnRvcCAtIGJsdXIub2Zmc2V0KCkudG9wLCAvLyAgINGC0LXQutGD0YnQtdC1INC/0L7Qu9C+0LbQtdC90LjQtSDRjdC70LXQvNC10L3RgtCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQtNC+0LrRg9C80LXQvdGC0LAuXHJcbiAgICAgIHBvc1ggPSBibHVyU2VjdGlvbi5vZmZzZXQoKS5sZWZ0IC0gYmx1ci5vZmZzZXQoKS5sZWZ0O1xyXG4gIFxyXG4gIGJsdXIuY3NzKHtcclxuICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6IGltZ1dpZHRoICsgJ3B4JyArICcgJyArICdhdXRvJyxcclxuICAgICAgLy8gJ2JhY2tncm91bmQtc2l6ZSc6ICdhdXRvJyArICcgJyArIGltZ0hlaWdodCArICdweCcsXHJcbiAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcG9zWCArICdweCcgKyAnICcgKyBwb3NZICsgJ3B4J1xyXG4gIH0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAoZnVuY3Rpb24oKSB7XHJcbi8vICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4vLyAgIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbi8vICAgLy8gfSwgMTAwMCk7XHJcblxyXG4vLyAgICQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcbi8vICAgICB2YXIgbXlNYXA7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4vLyAgICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbi8vICAgICAgICAgICAgIGNlbnRlcjogWzU5LjkzOTE2OTk4NjkyMTc0LDMwLjMwOTAxNTA5NjczMjYyMl0sXHJcbi8vICAgICAgICAgICAgIHpvb206IDExLFxyXG4vLyAgICAgICAgICAgICBjb250cm9scyA6IFtdLFxyXG4vLyAgICAgICAgIH0pO1xyXG5cclxuLy8gICAgICAgICB2YXIgY29vcmRzID0gW1xyXG4vLyAgICAgICAgICAgICAgICAgWzU5Ljk0NTU0MzI3OTg5Mjg3LDMwLjM4OTM1MjYyMTE0NjY4XSxcclxuLy8gICAgICAgICAgICAgICAgIFs1OS45MTE0MjMyMzU2MzkwOSwzMC41MDAyNDU4NzA2NTg0MV0sXHJcbi8vICAgICAgICAgICAgICAgICBbNTkuODg2OTMxNjE3ODQ2MDYsMzAuMzE5NjU4MTAyMTAzNzEzXSxcclxuLy8gICAgICAgICAgICAgICAgIFs1OS45NzAzMzU3NDgyMTY3MiwzMC4zMTUxOTQ5MDYzMDI5MjRdLFxyXG4vLyAgICAgICAgICAgICBdLFxyXG4vLyAgICAgICAgICAgICBteUNvbGxlY3Rpb24gPSBuZXcgeW1hcHMuR2VvT2JqZWN0Q29sbGVjdGlvbih7fSwge1xyXG4vLyAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuLy8gICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuLy8gICAgICAgICAgICAgICAgIC8vIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvaWNvbnMvbWFwX21hcmtlci5zdmcnLFxyXG4vLyAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbi8vICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjYsIC01Ml1cclxuLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4vLyAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgIG15Q29sbGVjdGlvbi5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhjb29yZHNbaV0pKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15Q29sbGVjdGlvbik7XHJcblxyXG4vLyAgICAgICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5cclxuLy8gfSkoKTsiXX0=
