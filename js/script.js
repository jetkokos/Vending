$(document).ready(function(){
  //Плавное появление Popup
    $(document).on("click", '.callBack_ref', function(event) {
      event.preventDefault();
      $('.callBack').addClass('visible');
      $('body').addClass('popup-open');
    });

    $(document).on("click", ".close", function(event) {
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });
      
      $(document).on("click", ".overlay", function(event) {
        $('.visible').removeClass('visible');
        $('body').removeClass('popup-open');
      });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.visible').removeClass('visible');
        $('body').removeClass('popup-open');
        return false;
      }
    });

/*Плавный переход к якорям*/
$(document).on("click", 'a[href^="#nav"]', function() {
  var el = $(this).attr('href');
  $('html, body').animate({
  scrollTop: $(el).offset().top}, 1000);
  console.log($(el));
  return false;
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

  





});




