<template>
    <nav class="nav">
        <div class="nav__logo">
            <div class="logo__title">SZK LABO</div>
        </div>
        <ul class="nav__link">
            <li><router-link to="/">Home</router-link></li><span></span>
            <li><router-link to="/skills">About</router-link></li><span></span>
            <li><router-link to="/jobs">Works</router-link></li><span></span>
            <li><router-link to="/">Contact</router-link></li>
        </ul>
        <div class="nav__burger" id="burger_item" @click="burgerMenuToggle" :class="{active:burgerMenu_state}">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
        <ul :class="['nav__slider' , {'active':burgerMenu_state}]">
            <li @click="mobileMenu"><router-link to="/" class="link">Home</router-link></li>
            <li @click="mobileMenu"><router-link to="/skills" class="link">About</router-link></li>
            <li @click="mobileMenu"><router-link to="/jobs" class="link">Works</router-link></li>
            <li @click="mobileMenu"><router-link to="/" class="link">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
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
