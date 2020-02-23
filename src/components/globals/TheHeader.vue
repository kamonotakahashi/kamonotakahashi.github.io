<template>
    <nav class="nav">
        <div class="nav__logo">
            <div class="logo__title">SZK LABO</div>
        </div>
        <ul class="nav__link">
            <template v-for="nav in header">
                <li><router-link :to="nav.link">{{nav.name}}</router-link></li><span></span>
            </template>
        </ul>
        <div
            class="nav__burger"
            id="burger_item"
            @click="burgerStatus = !burgerStatus"
            :class="{ active:burgerStatus }"
        >
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
        </div>
        <ul
            :class="['nav__slider' , {'active': burgerStatus}]"
        >
            <li @click="burgerStatus = !burgerStatus"><router-link to="/" class="link">Home</router-link></li>
            <li @click="burgerStatus = !burgerStatus"><router-link to="/skills" class="link">About</router-link></li>
            <li @click="burgerStatus = !burgerStatus"><router-link to="/jobs" class="link">Works</router-link></li>
            <li @click="burgerStatus = !burgerStatus"><router-link to="/" class="link">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { header } from '@/config/global';

@Component
export default class VueHeader extends Vue {
    private isOpen: boolean = false;
    private burgerStatus: boolean = false;

}
</script>

<style scoped>

</style>
