document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);
  let x = 52.38891297860454;
  let y = 55.740032307163204;
  let iconX = 52.4057357935459;
  let iconY = 55.739887042465234;
  // [55.740032307163204,52.39204579873389]
  //[55.73998388565755,52.38891297860454]
  console.log(x, y)


  function init() {
    let myMap = new ymaps.Map("map", {
      // center: [48.872185073737896, 2.354223999999991],
      center: [y, x],
      zoom: 14,
      controls: []
    }, {
      suppressMapOpenBlock: true
    });

    // var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    let myPlacemark = new ymaps.Placemark([iconY, iconX], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/icon-map.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-15, -42]
    });
    // myMap.setType('yandex#map');
    myMap.geoObjects.add(myPlacemark);
  }
});
