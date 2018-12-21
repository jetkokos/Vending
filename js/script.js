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


/*Маска ввода телефона */
$(function(){
  $("input[type='tel']").mask("+7(999) 999-9999");
});

/*Плавный переход к якорям*/
$(document).on("click", 'a[href^="#nav"]', function() {
  var el = $(this).attr('href');
  $('html, body').animate({
  scrollTop: $(el).offset().top}, 1000);
  console.log($(el));
  return false;
});


//Отображение прикрепленных файлов
/*
$(function(){
  $('#files2').change(function(){
    $('#upload_result').text($(this).val());
  });
});
*/
$('#files1').change(function() {
  if ($(this).val() != '') 
    $('.upload_result1').text('Загружено файлов: ' + $(this)[0].files.length);
  else $('.upload_result1').text('Выберите файлы');
});
$('#files2').change(function() {
  if ($(this).val() != '') 
    $('.upload_result2').text('Загружено файлов: ' + $(this)[0].files.length);
  else $('.upload_result2').text('Выберите файлы');
});

//Отправка данных на почту

  $('.formCall').submit(function(event) {
    event.preventDefault;
    var errors = false;
   // $(this).find('span').empty();

    $(this).find('.input_check').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
      }
    });
    if (!errors) {
      //var data = $(this).serialize(); // original
       data = new FormData(this);
      $.ajax({
        url: 'send.php',
        type: 'POST', 
        data: data,
        cache: false,
        contentType: false,
        processData: false,     
        beforeSend: function() {
         // $('.loader').css('display', 'block');
        $('.upload_result1').text('');
        $('.upload_result2').text('');
         $('.form').find('input').val('');
        $('.popup').removeClass('visible');
        $('.popupSuccessCall').addClass('visible');
        },
        success: function() {
        //    $('.loader').css('display', 'none');
        //    $('.upload_result1').text('');
        //    $('.upload_result2').text('');
        //    $('.form').find('input').val('');
        //    $('.popup').removeClass('visible');
        //    $('.popupSuccessCall').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
          $('.loader').css('display', 'none');
          $('.form').find('input').val('');
          $('.popup').removeClass('visible');
        }

      })
    }
    return false;
  });

  





});




