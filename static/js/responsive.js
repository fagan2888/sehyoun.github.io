$(document).ready(function(){
  $("#main_nav").css("display","block");
  $("body").css("padding-top","50px");
  if ( $(window).width() < 800) {
    $("#main-picture").attr("src","static/img/main_pic_md.jpg");
  }
  else {
    $("#main-picture").attr("src","static/img/main_pic_lg.jpg");
  }
});

$( window ).resize(function() {
  if (($(window).width() >= 800) && ($("main-picture").attr("src")!="static/img/main_pic_lg.jpg")) {
    $("#main-picture").attr("src","static/img/main_pic_lg.jpg");
  }
});
