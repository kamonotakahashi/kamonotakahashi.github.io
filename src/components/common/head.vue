<template>
<nav>
    <div class="logo">
        <h4>Kamo</h4>
    </div>
    <ul class="nav-links">
        <li><router-link to="/" class="spa-link">Index</router-link></li>
        <li><router-link to="/" class="spa-link">test</router-link></li>
        <li><router-link to="/" class="spa-link">tet222</router-link></li>
        <li><router-link to="/" class="spa-link">tet222</router-link></li>
    </ul>
    <div class="burger">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
    </div>

</nav>
</template>

<script>
export default {
    name: "HeadComponent",
    data: function() {
        return {
            isOpen: false,
        }
    }
};
</script>

<style>

</style>
