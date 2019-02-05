ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.766582, 37.541530],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/yandexmarker.png',
            // Размеры метки.
            iconImageSize: [54, 74],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-27, -74]
        });

    myMap.geoObjects
        .add(myPlacemark)
    myMap.behaviors.disable('scrollZoom'); 
});