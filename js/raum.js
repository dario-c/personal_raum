
$(document).on("click", function(){
  hidePointExplanation();
  hideAllBulletInfo();
});

$('main').on("mouseenter", 'section', function(event) {
  event.stopPropagation();
  $('main').find('h1').removeClass('selected');
  $(this).find('h1').addClass('selected');
});

$('main').on("click", 'section', function(event){
  event.stopPropagation();
  hidePointExplanation();
  $(this).closest('section').find('div').removeClass('hidden');
  toggleBulletInfo($(this));

});



function toggleBulletInfo(here){
  hideAllBulletInfo();
  var associated = here.data('punkte')+'-punkte';
  $('#'+associated).addClass('showPoints');
}

function hideAllBulletInfo(){
  $('aside').find('section').removeClass('showPoints');
}
function hidePointExplanation(){
$('.pointExplanation').addClass('hidden');
}