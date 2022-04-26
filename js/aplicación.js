$(document).ready(function(){

  var d4j = $("#alerce");
  var d9j = $("#d9");
  var d12j = $("#d12");

  d4j.click(function(){
      $(this).fadeTo("fast", 0);
  });

  d4j.click(function(){
      $(this).fadeTo("fast",1);
  });

  d4j.click(function(){
      $(d9j).show('fast');
  });

  d4j.click(function(){
    $(d12j).hide('fast');
});
})