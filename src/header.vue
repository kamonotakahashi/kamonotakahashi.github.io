<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light Sticky top bg-dark">
      <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="change Navigator">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand text-white" href="./">{{ webTitle }}</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item pl-4 pr-4">
            <a class="jump nav-link active text-white" name="my_profile">Profile</a>
          </li>
          <li class="nav-item pl-2 pr-2 text-white">
            <a class="jump nav-link text-white" name="my_job_career">Job Career</a>
          </li>
          <li class="nav-item pl-2 pr-2 text-white">
            <a class="jump nav-link text-white" name="other">Other</a>
          </li>
          <li class="nav-item pl-2 pr-2 text-white">
            <a class="jump nav-link text-white" name="contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import $ from "jquery";
export default {
  data: function() {
    return {
      webTitle : "かものたかはしの家"
    }
  },
  mounted: function(){
      var pos = $("#my_profile").position();
      $(".scroll").scrollTop(pos.top + 1);

      $(".jump").click(function(){
          var target = "#" + $(this).attr('name');
          var movePos = $(target).position();
          var scrollOpt = $(".scroll").scrollTop();
          var nextPos = movePos.top + scrollOpt + 1;
          $(".scroll").animate({
            scrollTop: nextPos
          },"slow", "swing");
      });
  }
}
</script>

<style lang="scss" scoped>
    //
</style>
