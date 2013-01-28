$(document).ready(function() {
  $("p").click(function() {
    alert("you click p  dom")
  });

  $('ul.first').find('.foo')
      .css('background-color', 'red')
    .end().find('.bar')
      .css('background-color', 'green')
    .end();
/*  $("div").click(function(){
    alert("you click div")
  })*/
});