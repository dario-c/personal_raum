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

$("nav").on("mouseenter","div", function(){
    var image = $(this).closest("nav").find("img");
    var filePath = "../PersonalRaum/images/";

  switch($(this)[0].className){
    case "ueber-uns":
    image.attr("src",filePath+"menu_about_selected.png");
    break;
    case "services":
    image.attr("src",filePath+"menu_services_selected.png");
    break;
    case "team":
    image.attr("src",filePath+"menu_team_selected.png");
    break;
    case "contact":
    image.attr("src",filePath+"menu_contact_selected.png");
    break;
    default:
    image.attr("src",filePath+"menu_none_selected.png");
    break;
  }
});

$("main").on("mouseleave", function(){
  $(this).find("img").attr("src",filePath+"none_selected.png");
});