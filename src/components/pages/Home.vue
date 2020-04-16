<template>
    <div class="container__wrap">
        <div class="content">
            <div
                class="content__headline"
                v-for=" (line, index) in headline"
                :key="index"
                :class="line.className"
                @click="clickActiveContent"
            >
                <div class="content__headline__title">
                    {{line.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">

import { Component, Mixins, Watch } from 'vue-property-decorator';
import StoreMixin from '@/store/global';

//Components
import VueCard from '@/components/parts/VueCard.vue';
import VueIcon from '@/components/parts/VueIcon.vue';

@Component({
  components: {
    VueCard,
    VueIcon
  },
})
export default class About extends Mixins(StoreMixin) {

    private headline: { className: string, text: string }[] = [
        { className: "portfolio", text: "Portfolio"},
        { className: "code-and-system", text: "Code And System"},
        { className: "works", text: "Works"}
    ];

    private clickActiveContent() :void {
        console.log("A")
    };

}
</script>