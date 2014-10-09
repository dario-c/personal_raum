
$('h1').on("mouseenter", function() {

  $('aside').find('section').addClass('hidden');
  var associated = $(this).closest('section').data('punkte')+'-punkte';
  $('#'+associated).removeClass('hidden');
});

$('h1').on("click", function(){

  $(this).closest('section').find('div').removeClass('hidden');

});