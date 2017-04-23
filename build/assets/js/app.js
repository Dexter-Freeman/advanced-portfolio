(function() {
  'use strict';

  // setTimeout(function() {
  //   document.querySelector('.greating_picture').classList.add('m--show');
  // }, 1000);

  $(function () {
    ymaps.ready(init);
    var myMap;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [59.93916998692174,30.309015096732622],
            zoom: 11,
            controls : [],
        });

        var coords = [
                [59.94554327989287,30.38935262114668],
                [59.91142323563909,30.50024587065841],
                [59.88693161784606,30.319658102103713],
                [59.97033574821672,30.315194906302924],
            ],
            myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false,
                iconLayout: 'default#image',
                // iconImageHref: '../img/icons/map_marker.svg',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }

        myMap.geoObjects.add(myCollection);

        myMap.behaviors.disable('scrollZoom');
    }
});

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgLy8gfSwgMTAwMCk7XHJcblxyXG4gICQoZnVuY3Rpb24gKCkge1xyXG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XHJcbiAgICB2YXIgbXlNYXA7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgICAgIGNlbnRlcjogWzU5LjkzOTE2OTk4NjkyMTc0LDMwLjMwOTAxNTA5NjczMjYyMl0sXHJcbiAgICAgICAgICAgIHpvb206IDExLFxyXG4gICAgICAgICAgICBjb250cm9scyA6IFtdLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY29vcmRzID0gW1xyXG4gICAgICAgICAgICAgICAgWzU5Ljk0NTU0MzI3OTg5Mjg3LDMwLjM4OTM1MjYyMTE0NjY4XSxcclxuICAgICAgICAgICAgICAgIFs1OS45MTE0MjMyMzU2MzkwOSwzMC41MDAyNDU4NzA2NTg0MV0sXHJcbiAgICAgICAgICAgICAgICBbNTkuODg2OTMxNjE3ODQ2MDYsMzAuMzE5NjU4MTAyMTAzNzEzXSxcclxuICAgICAgICAgICAgICAgIFs1OS45NzAzMzU3NDgyMTY3MiwzMC4zMTUxOTQ5MDYzMDI5MjRdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBteUNvbGxlY3Rpb24gPSBuZXcgeW1hcHMuR2VvT2JqZWN0Q29sbGVjdGlvbih7fSwge1xyXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICAgICAgICAgIC8vIGljb25JbWFnZUhyZWY6ICcuLi9pbWcvaWNvbnMvbWFwX21hcmtlci5zdmcnLFxyXG4gICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N10sXHJcbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjYsIC01Ml1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG15Q29sbGVjdGlvbi5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhjb29yZHNbaV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15Q29sbGVjdGlvbik7XHJcblxyXG4gICAgICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxufSkoKTsiXX0=
