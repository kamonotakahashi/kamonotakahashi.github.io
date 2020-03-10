<template>
    <nav class="nav">
        <div class="nav__logo">
            <div class="logo__title">SZK LABO</div>
        </div>
        <ul class="nav__link">
            <template v-for="(nav, index) in header">
                <li :key="index">
                    <router-link :to="nav.path">{{nav.name}}</router-link>
                </li>
                <span v-if="nav.index !== header.length" :key="'_'+index" />
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
            <template v-for="nav in header">
                <li @click="burgerStatus = !burgerStatus" :key="nav.index">
                    <router-link :to="nav.path" class="link">{{nav.name}}</router-link>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import { headerNavigation } from '@/config/global';
import { Client } from '@/types/client';
import StoreMixin from '@/store/global';

@Component
//export default class VueHeader extends Vue {
export default class VueHeader extends Mixins(StoreMixin) {

    /** data */
    private isOpen: boolean = false;
    private burgerStatus: boolean = false;

    get clientWindow(): Client {
        return this.clientWindow;
    };

    /** computed */
    get header(): {index: number, path: string, name: string}[] {
        return headerNavigation;
    }

}
</script>

<style scoped>

</style>
