$(document).ready(function(){

  var pajaro = $(".fotopajaro")
  var condor = $("#fotocondor")

  pajaro.mouseenter(function(){
      $(this).fadeTo("fast",1);
  });

  pajaro.mouseleave(function(){
    $(this).fadeTo("fast",0.5);
  });

  pajaro.click(function(){
    $(this).fadeTo("fast",1);
  });

  $("#fotocondor").click(function(){
    $("#condor").show('fast');
    $("#garza").hide('fast');
    $("#huala"). hide('fast');
    $("#aguila").hide('fast');
    $("#bandurria").hide('fast');
    $("#cormoran").hide('fast');
    $("#quetru").hide('fast');
    $("#caiquen").hide('fast');
    $("#caranca").hide('fast');
    $("#peuco").hide('fast');
    $("#tagua").hide('fast');
    $("#aguilucho").hide('fast');
    $("#pato real").hide('fast');
    $("#tucuquere").hide('fast');
    $("#carpintero").hide('fast');
    $("#pilpilen").hide('fast');
    $("#martin pescador").hide('fast');
    $("#cortacorriente").hide('fast');
    $("#choroy").hide('fast');
    $("#torcaza").hide('fast');
    $("#concon").hide('fast');
    $("#cernicalo").hide('fast');
    $("#tordo").hide('fast');
    $("#huet huet").hide('fast');
    $("#diuca").hide('fast');
    $("#chincol").hide('fast');
    $("#rayadito").hide('fast');
    $("#chercan").hide('fast');
    $("#picaflor").hide('fast');
    $("#cachudito").hide('fast');
  });

})