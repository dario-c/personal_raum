
$(document).on("click", function(){
  $('.pointExplanation').addClass('hidden');
});

$('main').on("mouseenter", 'section', function(event) {

  event.stopPropagation();
  $('main').find('h1').removeClass('selected');
  $(this).find('h1').addClass('selected');

  $('aside').find('section').removeClass('showPoints');
  var associated = $(this).data('punkte')+'-punkte';
  $('#'+associated).addClass('showPoints');
});



$('main').on("click", 'section', function(event){
  event.stopPropagation();
  $('.pointExplanation').addClass('hidden');
  $(this).closest('section').find('div').removeClass('hidden');

});

