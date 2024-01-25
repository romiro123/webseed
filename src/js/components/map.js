document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);
  let windowInnerWidth = window.innerWidth;
  let y;
  let x;
  let zoom;
  let iconX = 52.4057357935459;
  let iconY = 55.739887042465234;


  if (windowInnerWidth >= 576) {
    y = 55.740032307163204;
    x = 52.38891297860454;
    zoom = 14;
  } else {
    y = 55.73907597124874;
    x = 52.4024098543674;
    zoom = 15;
  }

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [y, x],
      zoom: zoom,
      controls: []
    }, {
      suppressMapOpenBlock: true
    });


    let myPlacemark = new ymaps.Placemark([iconY, iconX], {}, {
      iconLayout: 'default#image',
      // iconImageHref: './img/icon-map.svg',
      iconImageHref: '/wp-content/themes/webseed/assets/img/icon-map.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-15, -42]
    });
    myMap.behaviors.disable('scrollZoom').disable('drag').enable('multiTouch');
    myMap.geoObjects.add(myPlacemark);

  }
});
