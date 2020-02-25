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
                        <div>
                        <dd class="mt-15 line-height-normal">
                            高校卒業後、運送会社に就職し１年ほど倉庫内で仕分けの仕事をしておりましたが、
                            何か違うと思い立って会社を辞め、中学時代からパソコンに興味があった事もあり、
                            そのまま初のIT企業に就職。
                        </dd>
                        <VueLiner />
                        <dd class="mt-15 line-height-normal">
                            SES(System Engineering Service)の会社でインフラのSIerを経て、
                            ネットワーク機器ベンダーの会社に就職しネットワークエンジニアをやりながら、
                            プリセールスSEとして、顧客訪問など行い、機器の販売から提案、設計〜導入と、
                            すべてのフェーズを一人で担当しておりました。
                        </dd>
                        <dd class="mt-15 line-height-normal">
                            現在はインフラで培った経験を基に、Webエンジニアとしてアプリケーションの
                            開発を主にした仕事をしております。
                        </dd>
                        </div>
                    </dl>
                </div>
                <div>
                    <div class="text-center block-center middle pa-10">
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
import VueLiner from '@/components/parts/VueLiner';

@Component({
  components: {
    VueImage,
    VueTag,
    VueLiner
  },
})

export default class About extends Vue {
    private tags: {name: string, link?: string}[] = [
        {name : "福井県出身", link: "https://ja.wikipedia.org/wiki/%E7%A6%8F%E4%BA%95%E7%9C%8C"},
        {name : "Webエンジニア", link: undefined}
    ]
}
</script>