<template>
    <div class="content">
        <div class="content__wrap">
            <div class="flex-two-column mt-20 about-content">
                <div>
                    <dl>
                        <dt class="headline mb-15">
                            鈴木　祐貴
                        </dt>
                        <dt>
                            <VueTag :tags="tags" />
                        </dt>
                        <dd class="mt-15 line-height-normal">
                            {{profile(0)}}
                        </dd>
                        <template v-if="575 < width || profileMore">
                            <VueLiner />
                            <dd class="mt-15 line-height-normal">
                                {{profile(1)}}
                            </dd>
                            <dd class="mt-15 line-height-normal">
                                {{profile(2)}}
                            </dd>
                        </template>
                        <template v-else>
                            <VueButton
                                align="center"
                                type="dark"
                                width="75"
                                animation="true"
                                @event="profileMoreAction"
                            >
                                続きを表示する
                            </VueButton>
                        </template>
                    </dl>
                </div>
                <div>
                    <div class="text-center valign-middle block-center pa-10">
                        <VueImage
                            src="/assets/img/szk_profile.jpg"
                            type="avator"
                            width="300"
                            height="280"
                            align="center"
                            valign="middle"
                        />
                    </div>
                </div>
            </div>
            <div class="mt-20">
                <h1 class="sub-title-2 pt-5 pb-5">
                    <span class="text-size-32">S</span>kill
                </h1>
                <div class="skill flex-three-column">
                    <div class="py-5 pr-5">
                        <div class="bg-light-gray pl-4 py-10">プログラミング</div>
                        <dl>
                            <dt>a</dt>
                            <dd>a</dd>
                        </dl>
                    </div>
                    <div class="py-5 pr-5">
                        <div class="bg-light-gray pl-4 py-10">システム設計</div>
                        <dl>
                            <dt>a</dt>
                            <dd>a</dd>
                        </dl>
                    </div>
                    <div class="py-5">
                        <div class="bg-light-gray pl-4 py-10">インフラストラクチャー</div>
                        <dl>
                            <dt>a</dt>
                            <dd>a</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { profileText } from '@/config/text';
import StoreMixin from '@/store/global';

import VueImage from '@/components/parts/VueImage';
import VueTag from '@/components/parts/VueTag';
import VueLiner from '@/components/parts/VueLiner';
import VueButton from '@/components/parts/VueButton';

@Component({
  components: {
    VueImage,
    VueTag,
    VueLiner,
    VueButton
  },
})

export default class About extends Mixins(StoreMixin) {

    private profileMore: boolean = true;
    private tags: {name: string, link?: string}[] = [
        {name : "福井県出身", link: "https://ja.wikipedia.org/wiki/%E7%A6%8F%E4%BA%95%E7%9C%8C"},
        {name : "Webエンジニア", link: undefined}
    ];

    profile(value: number) :string {
        return profileText[value];
    };

    get width():number {
        this.profileMore = 575 < this.clientWindowWidth ? true : false;
        return this.clientWindowWidth;
    };

    profileMoreAction(value: any):void {
        this.profileMore = true;
    }

}
</script>