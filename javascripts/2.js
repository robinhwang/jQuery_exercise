$(document).ready(function(){
  $(".article .thebody").hide();
  $("#container .article ul")
    .prepend("<li class='readbody'><a href='' title='Read the article'>Read Body</a></li>")
    .click(function(e){
      $(this).siblings('.thebody').show();
      e.preventDefault();
    });
});