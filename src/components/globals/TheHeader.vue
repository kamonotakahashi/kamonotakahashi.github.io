<template>
    <nav class="nav">
        <div class="nav__logo">
            <div class="logo__title">
                <router-link to="/">SZK LABO</router-link>
            </div>
        </div>
        <ul class="nav__link">
            <template v-for="(nav, index) in header">
                <li :key="index" :class="{ 'active' : nav.path == $route.path}">
                    <router-link :to="nav.path">
                        <span>{{nav.path == $route.path ? nav.activeName : nav.name}}</span>
                    </router-link>
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
                <li @click="burgerStatus = !burgerStatus" :key="nav.index" class="block">
                    <router-link :to="nav.path" class="link">{{nav.name}}</router-link>
                </li>
            </template>
            <li class="sp-menu">
                <div class="sp-menu__wrap">
                    <div class="mt-5 ml-15">
                        <VueIcon
                            src="/sns/linkedin.png"
                            width="32"
                            height="32"
                            link="https://www.linkedin.com/in/yuki-suzuki-3b1000169"
                        />
                    </div>
                    <div>
                        <VueIcon
                            src="/sns/twitter.png"
                            width="40"
                            height="40"
                            link="https://twitter.com/sokorahen_szk"
                        />
                    </div>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.sp-menu {
    margin-top: 10px;
    &__wrap {
        width: 100%;
        display: inline-flex;
        justify-content: center;
    }
    a {
        display: none;
    }
}
</style>


<script lang="ts">
//Components
import { Component, Vue, Mixins, Watch } from 'vue-property-decorator';

//Config
import { headerNavigation } from '@/config/global';

//Types
import { Client } from '@/types/client';

//Store
import StoreMixin from '@/store/global';

//Components
import VueIcon from '@/components/parts/VueIcon.vue';

@Component({
  components: {
    VueIcon
  },
})
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