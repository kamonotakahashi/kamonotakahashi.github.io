var pos = $("#section_2").position();
$(".scroll").scrollTop(pos.top + 1);

$(".link-jump").click(function(){
  var target = "#" + $(this).id();
  var th = $(target).position();
  var sh = $(".scroll").scrollTop();
  var pos = th.top + sh + 1;
  $(".scroll").animate({
    scrollTop: pos
  },"slow", "swing");
});
