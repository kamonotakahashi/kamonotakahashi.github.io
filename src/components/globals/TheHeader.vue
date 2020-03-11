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
            <li>
                --
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
//Components
import { Component, Vue, Mixins, Watch } from 'vue-property-decorator';

//Config
import { headerNavigation } from '@/config/global';

//Types
import { Client } from '@/types/client';

//Store
import StoreMixin from '@/store/global';

@Component
export default class VueHeader extends Mixins(StoreMixin) {

    /** data */
    private isOpen: boolean = false;
    private burgerStatus: boolean = false;

    /** Computed */
    get header(): {index: number, path: string, name: string}[] {
        return headerNavigation;
    }

    /* Watch */
    @Watch('_client', { deep: true })
    private onHeaderFixedChange(_client: Client):void {
        if(_client.scroll_top > 60) {
            $("nav").addClass("has_smaller");
            $(".nav__slider").addClass("has_smaller__slider");
        } else {
            $("nav").removeClass("has_smaller");
            $(".nav__slider").removeClass("has_smaller__slider");
        }
    }

}
</script>

<style scoped>

</style>
