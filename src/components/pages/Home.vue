<template>
    <div class="container__wrap">
        <div class="content">
            <div
                class="content__headline"
                v-for=" (line, index) in headline"
                :key="index"
                :class="[line.className, { active : selectHeadlineContentNumber == index }]"
                :data-column-name="line.className"
                @click="clickActiveContent(index, line.vueExtendInstance, $event)"
            >
                <div class="content__headline__title" :class="{ active : selectHeadlineContentNumber == index }">
                    {{line.text}}
                </div>
                <div class="">

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">

import { Vue, Component, Mixins, Watch } from 'vue-property-decorator';
import StoreMixin from '@/store/global';

//Components
import VueCard from '@/components/parts/VueCard.vue';
import VueIcon from '@/components/parts/VueIcon.vue';
import VueHomePortfolio from '@/components/parts/home/VueHomePortfolio.vue';

@Component({
  components: {
    VueCard,
    VueIcon
  },
})
export default class About extends Mixins(StoreMixin) {

    private headline: { className: string, text: string, vueExtendInstance: any  }[] = [
        { className: "portfolio", text: "Portfolio", vueExtendInstance: VueHomePortfolio},
        { className: "code-and-system", text: "Code And System", vueExtendInstance: VueHomePortfolio},
        { className: "works", text: "Works", vueExtendInstance: VueHomePortfolio}
    ];

    private selectHeadlineContentNumber :number = 1;

    private clickActiveContent(index: number, instance: any, $event: any) :void {
        this.selectHeadlineContentNumber = index;

        var ComponentClass = Vue.extend(instance);
        var componentInstance = new ComponentClass();

        componentInstance.$mount();

        console.log($event)

    };

}
</script>