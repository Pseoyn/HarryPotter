
// $(window).resize(function(){
//     w = $("#animals li").height();
//     $("#animals").css("height",h);
// });

  function slide() {


    let h = $("#animals li").height();
    $("#animals").css("height",h);

  

  $('.slide').stop().animate({ marginTop: -h}, 2000, function () {
      $('.slide li:first').appendTo('.slide');
      $('.slide').css({ marginTop: 0 });
  });
}
setInterval(slide, 2400);


$(document).ready(function() {
$(".test").mousemove(function(event) {
  var x = event.pageX;
  var y = event.pageY;

  $(".tip").css({left: x +20 , top: y - 40}).addClass("on");
}).mouseleave(function() {
  $(".tip").removeClass("on");
});
});
