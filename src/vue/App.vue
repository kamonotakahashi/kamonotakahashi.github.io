<template>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light Sticky top bg-dark custom-hamburger">
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="change Navigator">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="navbar-brand">
            <span class="navbar-logo">
                <span class="title-color h3">K</span>
            </span>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item pl-2 pr-2">
                <router-link to="/" class="nav-link text-light">Index</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
                <router-link to="/skills" class="nav-link text-light">Skills</router-link>
            </li>
            <li class="nav-item pl-2 pr-2">
                <router-link to="/jobs" class="nav-link text-light">Job Career</router-link>
            </li>
        </ul>
        </div>
    </nav>
    <div class="container-fluid pt-2 pr-5 pl-5 pb-2">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
