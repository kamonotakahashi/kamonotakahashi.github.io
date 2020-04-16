<template>
    <div class="container__wrap">
        <div class="content">
            <div
                class="content__headline"
                v-for=" (line, index) in headline"
                :key="index"
                :class="[line.className, { active : selectHeadlineContentNumber == index }]"
                :data-column-name="line.className"
                @click="clickActiveContent(index, line.vueExtendInstance)"
            >
                <div class="content__headline__title" :class="{ active : selectHeadlineContentNumber == index }">
                    {{line.text}}
                </div>
                <div class="content__headline__entry" v-show="selectHeadlineContentNumber == index">
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

    /* data */
    private headline: { className: string, text: string, vueExtendInstance: any  }[] = [
        { className: "portfolio", text: "Portfolio", vueExtendInstance: VueHomePortfolio},
        { className: "code-and-system", text: "Code And System", vueExtendInstance: VueHomePortfolio},
        { className: "works", text: "Works", vueExtendInstance: VueHomePortfolio}
    ];

    private selectHeadlineContentNumber :number = 0;

    /* computed */
    private clickActiveContent(index: number, instance: any) :void {
        this.selectHeadlineContentNumber = index;
        var ComponentClass = Vue.extend(instance);
        var componentInstance = new ComponentClass();
        var contentInstance = document.getElementsByClassName("content__headline")[index];
        contentInstance.getElementsByClassName("content__headline__entry")[0].innerHTML = '';
        contentInstance.getElementsByClassName("content__headline__entry")[0].append(componentInstance.$mount().$el);

    };

    /* mounted */
    mounted() {

        //開いた時にデフォルトの選択コンテンツを動的バインド
        this.clickActiveContent(
            this.selectHeadlineContentNumber,
            this.headline[this.selectHeadlineContentNumber].vueExtendInstance
        );

    };

}
</script>