$(document).ready(function(){
  //Плавное появление Popup
    $(document).on("click", '.callBack_ref', function(event) {
      event.preventDefault();
      $('.callBack').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", '.takeCredit_ref', function(event) {
      event.preventDefault();
      $('.takeCredit').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", '.downloadCond_ref', function(event) {
      event.preventDefault();
      $('.downloadCond').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", '.downloadOffer_ref', function(event) {
      event.preventDefault();
      $('.downloadOffer').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", '.downloadContract_ref', function(event) {
      event.preventDefault();
      $('.downloadContract').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", '.downloadPolitics_ref', function(event) {
      event.preventDefault();
      $('.downloadPolitics').addClass('visible');
      $('body').addClass('popup-open');
    });

     $(document).on("click", ".enterPop_ref", function(event) {
      event.preventDefault();
      $('.enterPop').addClass('visible');
      $('body').addClass('popup-open');
    }); 

    $(document).on("click", ".enterReg_ref", function(event) {
      event.preventDefault();
      $('.enterPop').removeClass('visible');
      $('.regPop').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", ".rememberPass_ref", function(event) {
      event.preventDefault();
      $('.enterPop').removeClass('visible');
      $('.popupRememberPass').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", ".successReg_ref", function(event) {
      event.preventDefault();
      $('.enterPop').removeClass('visible');
      $('.popupSuccessEnter').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", ".home_ref", function(event) {
      event.preventDefault();
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });

    $(document).on("click", "#close", function(event) {
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });


/*Плавный переход к якорям*/
    $(document).on("click", 'a[href^="#nav"]', function() {
      var el = $(this).attr('href');
      $('html, body').animate({
      scrollTop: $(el).offset().top}, 1000);
      console.log($(el));
      return false;
    });

//Slick-Слайдер отзывов
  $('.slider-right').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: $('.slider-btns'),
    variableWidth: true
  });

//Отправка данных на почту

  $('.formCall').submit(function(event) {
    var errors = false;
    $(this).find('span').empty();

    $(this).find('input').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
        $(this).next().text('обязательно для заполнения');
      }
    });
    if (!errors) {
      var data = $(this).serialize();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
        },
        success: function() {
            $('.form').find('input').val('');
            $('.popup').removeClass('visible');
            $('.popupSuccessCall').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
        }

      })
    }
    return false;
  });

  $('.formDocs').submit(function(event) {
    var errors = false;
    $(this).find('span').empty();

    $(this).find('input').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
        $(this).next().text('обязательно для заполнения');
      }
    });
    if (!errors) {
      var data = $(this).serialize();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
        },
        success: function() {
            $('.form').find('input').val('');
            $('.popup').removeClass('visible');
            $('.popupSuccessDocs').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
        }

      })
    }
    return false;
  });

//Анимация счетчика


var show = true;
	var countbox = '.odometer';
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		var w_height = $(window).height();        // Высота окна браузера
		var d_height = $(document).height();      // Высота всего документа
		var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".odometer").spincrement({
          from: 0,                    // Стартовое число
          to: null,                 // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
          decimalPlaces: 0,         // Сколько знаков оставлять после запятой
          decimalPoint: ".",      // Разделитель десятичной части числа
          thousandSeparator: "", // Разделитель тыcячных
          duration: 2000
			});
			show = false;
		}
	});








});




