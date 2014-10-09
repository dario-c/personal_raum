
$('main').on("mouseenter", 'section', function() {

  $('aside').find('section').addClass('hidden');
  var associated = $(this).data('punkte')+'-punkte';
  $('#'+associated).removeClass('hidden');
});

$('h1').on("click", function(){
  $('.information').addClass('hidden');
  $(this).closest('section').find('div').removeClass('hidden');

});