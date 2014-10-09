
$(document).on("click", function(){
  $('.information').addClass('hidden');
});

$('main').on("mouseenter", 'section', function(event) {

  event.stopPropagation();
  $('main').find('h1').removeClass('selected');
  $(this).find('h1').addClass('selected');

  $('aside').find('section').addClass('hidden');
  var associated = $(this).data('punkte')+'-punkte';
  $('#'+associated).removeClass('hidden');
});



$('main').on("click", 'section', function(event){
  event.stopPropagation();
  $('.information').addClass('hidden');
  $(this).closest('section').find('div').removeClass('hidden');

});

