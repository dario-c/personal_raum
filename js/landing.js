var logo = $("#logo");

logo.on("mouseenter", function(){
  console.log("helo")
  $('.menu').addClass("show");
});

logo.parent().on("mouseleave", function(){

  setTimeout("$('.menu').removeClass('show');",1000);
});

$('.menu').on("mouseenter","img",  function(){
  console.log();
$(this).parent().find(".unhovered").addClass("hide").next().removeClass("hide");
});

$('.menu').on("mouseleave","img",  function(){
  console.log();
$(this).parent().find(".unhovered").removeClass("hide").next().addClass("hide");
});

