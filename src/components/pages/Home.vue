<template>
    <div class="container__wrap">
        <div class="content">
            <div class="content__headline">
                <div class="content__headline__title">
                    <div class="content__headline__title-wrap">
                        <h1>{{
                            homeContents[selectHeadlineContentNumber].title
                        }}</h1>
                        <div class="sub">- {{
                            homeContents[selectHeadlineContentNumber].subTitle
                        }} -</div>
                    </div>
                </div>
                <div class="content__headline__entry">
                </div>
                <div class="content__headline__action">
                    <VueSliderButton
                        :contentLimit="homeContents.length - 1"
                        :currentContent="selectHeadlineContentNumber"
                        @sliderClickEvent="gotoClick"
                    ></VueSliderButton>
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
import VueHomePortfolio from '@/components/parts/home/VueHomePortfolio.vue';
import VueHomeSelfMadeContent from '@/components/parts/home/VueHomeSelfMadeContent.vue';
import VueLiner from '@/components/parts/VueLiner.vue';
import VueSliderButton from '@/components/parts/VueSliderButton.vue';

@Component({
    components: {
        VueLiner,
        VueSliderButton
    }
})
export default class About extends Mixins(StoreMixin) {

    private selectHeadlineContentNumber :number = 0;

    private homeContents: any = [
        {
            className: "portfolio",
            title: "Portfolio",
            subTitle: "ポートフォリオ",
            vueExtendInstance: VueHomePortfolio
        },
        {
            className: "code-and-system",
            title: "Code/System",
            subTitle: "コード／システム",
            vueExtendInstance: VueHomeSelfMadeContent
        },
        {
            className: "works",
            title: "Works",
            subTitle: "ワーク",
            vueExtendInstance: VueHomeSelfMadeContent
        }
    ];

    /* Methotds */
    private dynamicComponet(index: number, instance: any) :void {
        this.selectHeadlineContentNumber = index;
        var ComponentClass = Vue.extend(instance);
        var componentInstance = new ComponentClass();
        var contentInstance = document.getElementsByClassName("content__headline")[0];
        contentInstance.getElementsByClassName("content__headline__entry")[0].innerHTML = '';
        contentInstance.getElementsByClassName("content__headline__entry")[0].append(componentInstance.$mount().$el);
    }

    private gotoClick(index: number) :void {

        this.selectHeadlineContentNumber = index;

        this.dynamicComponet(
            this.selectHeadlineContentNumber,
            this.homeContents[this.selectHeadlineContentNumber].vueExtendInstance
         );

    }

    /* mounted */
    mounted() {

        //開いた時にデフォルトの選択コンテンツを動的バインド
        this.dynamicComponet(
            this.selectHeadlineContentNumber,
            this.homeContents[this.selectHeadlineContentNumber].vueExtendInstance
        );

    };

}
</script>