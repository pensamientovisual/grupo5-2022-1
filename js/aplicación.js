$(document).ready(function(){

  var pajaro = $(".fotopajaro")

  pajaro.mouseenter(function(){
      $(this).fadeTo("fast",1);
  });

  pajaro.mouseleave(function(){
    $(this).fadeTo("fast",0.5);
  });

  pajaro.click(function(){
    $(this).fadeTo("fast",1);
  });

})