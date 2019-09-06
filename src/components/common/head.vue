<template>
<nav>
    <div class="logo">
        <h4>Kamo</h4>
    </div>
    <ul class="nav-links">
        <li><router-link to="/" class="spa-link">Home</router-link></li>
        <li><router-link to="/skills" class="spa-link">About</router-link></li>
        <li><router-link to="/jobs" class="spa-link">Works</router-link></li>
        <li><router-link to="/" class="spa-link">Contact</router-link></li>
    </ul>
    <div class="burger" id="burger_item" @click="burgerMenuToggle" :class="{active:burgerMenu_state}">
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
    </div>
    <ul :class="['nav-slider' , {'active':burgerMenu_state}]">
        <li class="slider-spa-link" @click="mobileMenu"><router-link to="/" class="link">Home</router-link></li>
        <li class="slider-spa-link" @click="mobileMenu"><router-link to="/skills" class="link">About</router-link></li>
        <li class="slider-spa-link" @click="mobileMenu"><router-link to="/jobs" class="link">Works</router-link></li>
        <li class="slider-spa-link" @click="mobileMenu"><router-link to="/" class="link">Contact</router-link></li>
    </ul>


</nav>
</template>

<script>
export default {
    name: "HeadComponent",
    data: function() {
        return {
            isOpen: false,
            burgerMenu_state: false,
        }
    },
    methods: {
        burgerMenuToggle : function (event) {
            if(this.burgerMenu_state === true){
                this.burgerMenu_state = false;
                return;
            }
            this.burgerMenu_state = true;
        },
        mobileMenu : function (event) {
            this.burgerMenuToggle();
        },
    }
};
</script>

<style scoped>

</style>
