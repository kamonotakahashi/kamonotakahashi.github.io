<template>
    <div class="content">
        <div class="content__wrap">
            <div class="flex-two-column mt-20 about-content">
                <div>
                    <dl>
                        <dt class="headline mb-10">
                            鈴木　祐貴
                        </dt>
                        <dt>
                            <VueTag :tags="tags" />
                        </dt>
                        <dd class="mt-15 line-height-normal">
                            {{profile(0)}}
                        </dd>
                        <div v-if="575 < width">
                            <VueLiner />
                            <dd class="mt-15 line-height-normal">
                                 {{profile(1)}}
                            </dd>
                            <dd class="mt-15 line-height-normal">
                                {{profile(2)}}
                            </dd>
                            <VueButton
                                align="center"
                                type="dark"
                                width="300"
                            >
                                続きを表示する
                            </VueButton>
                        </div>
                    </dl>
                </div>
                <div>
                    <div class="text-center block-center middle pa-10">
                        <VueImage
                            src="https://pbs.twimg.com/profile_images/977229272589877248/tvazqbxS_400x400.jpg"
                            type="avator"
                            width="300"
                            height="280"
                        />
                        <!--
                        <VueImage
                            src="/assets/img/szk_profile.jpg"
                            type="avator"
                            width="300"
                            height="280"
                        />
                        -->
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

    private tags: {name: string, link?: string}[] = [
        {name : "福井県出身", link: "https://ja.wikipedia.org/wiki/%E7%A6%8F%E4%BA%95%E7%9C%8C"},
        {name : "Webエンジニア", link: undefined}
    ];

    profile(value: number) :string {
        return profileText[value];
    };

    get width():number {
        return this.clientWindowWidth;
    };

}
</script>