<template>
    <div class="content">
        <div class="content__wrap">
            <div class="flex-two-column mt-20">
                <div>
                    <dl>
                        <dt class="headline mb-10">
                            鈴木　祐貴
                        </dt>
                        <dt>
                            <VueTag :tags="tags" />
                        </dt>
                        <dd class="mt-15 line-height-normal">
                            高校卒業後、運送会社に就職し１年ほど倉庫内で仕分けの仕事をしておりました。
                            元より、パソコンに興味があって、中学の頃は独学でHTMLやCSS、JavaScriptを学び、
                        </dd>
                    </dl>
                </div>
                <div>
                    <div class="text-center block-center pa-10">
                        <VueImage
                            src="/assets/img/szk_profile.jpg"
                            type="avator"
                            width="300"
                            height="280"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import VueImage from '@/components/parts/VueImage';
import VueTag from '@/components/parts/VueTag';

@Component({
  components: {
    VueImage,
    VueTag
  },
})

export default class About extends Vue {
    private tags: {name: string, link?: string}[] = [
        {name : "福井県出身", link: "https://ja.wikipedia.org/wiki/%E7%A6%8F%E4%BA%95%E7%9C%8C"},
        {name : "Webエンジニア", link: undefined}
    ]
}
</script>