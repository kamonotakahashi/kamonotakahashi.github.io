<template>
    <div class="content">
        <div class="content__wrap about-content">
            <div class="flex-two-column mt-20">
                <div>
                    <div class="text-center valign-middle block-center pa-10">
                        <!--VueImage
                            src="/assets/img/szk_profile.jpg"
                            type="avator"
                            width="300"
                            height="280"
                            align="center"
                            valign="middle"
                        /-->
                        <VueImage
                            src="https://my.royalcanin.jp/customize/img/knowledge/shiba_inu/img_kind.jpg"
                            type="avator"
                            width="300"
                            height="280"
                            align="center"
                            valign="middle"
                        />
                    </div>
                </div>
                <div>
                    <dl>
                        <dt class="headline my-15">
                            鈴木　祐貴
                        </dt>
                        <dt>
                            <VueTag :tags="tags" />
                        </dt>
                        <dd class="mt-15 line-height-normal">
                            {{profile(0)}}
                        </dd>
                        <template v-if="575 < clientWidth || profileMore">
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
            </div>
            <div class="mt-30">
                <h1 class="sub-title-2 pt-5 pb-10">
                    <span class="text-size-32">S</span>kill
                </h1>
                <div class="skill flex-three-column">
                    <div class="py-5 pr-5">
                        <div class="text-center pl-4 py-10">プログラミング</div>
                        <dl>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="70" value="PHP" color="gray" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="65" value="JavaScript" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="SQL" color="gray" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="55" value="Python" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="50" value="Java" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="50" value="Bash／PowerShell" font-size="12" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="45" value="VBA/VBS" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="40" value="C" color="light-blue" />
                            </dt>
                        </dl>
                    </div>
                    <div class="py-5 pr-5">
                        <div class="text-center pl-4 py-10">システム設計</div>
                        <dl>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="85" value="開発／開発" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="基本設計" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="詳細設計" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="50" value="用件定義" color="light-blue" />
                            </dt>
                        </dl>
                    </div>
                    <div class="py-5">
                        <div class="text-center pl-4 py-10">インフラストラクチャー</div>
                        <dl>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="65" value="Linux" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="ネットワーク設計／構築" font-size="12" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="サーバ設計／構築" font-size="12" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="60" value="AWS" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="55" value="Ansible／Chef" font-size="12" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="50" value="Azure" color="light-blue" />
                            </dt>
                            <dt class="mt-5 mb-5">
                                <VueBarChart percent="40" value="Unix" color="light-blue" />
                            </dt>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="mb-20">
                <h1 class="sub-title-2 pt-5 pb-10">
                    <span class="text-size-32">C</span>ertificate
                </h1>
                <div class="certificate__table">
                    <dl class="certificate__table__head">
                        <dd class="text-center">Certificate Name</dd>
                        <dd class="text-center">Effective Date</dd>
                        <dd class="text-center">Status</dd>
                    </dl>
                    <template v-for="(certificate, index) in certificates">
                        <dl class="certificate__table__body" :key="index">
                            <dd class="text-center">{{certificate.name}}</dd>
                            <dd class="text-center">{{certificate.acquisitionDate}}</dd>
                            <dd class="text-center">
                            {{
                                certificateCheckExpire(certificate.acquisitionDate, certificate.period, certificate.year)
                            }}</dd>
                        </dl>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Mixins, Watch } from 'vue-property-decorator';
import { profileText, certificate } from '@/config/text';
import StoreMixin from '@/store/global';
import VueImage from '@/components/parts/VueImage.vue';
import VueTag from '@/components/parts/VueTag.vue';
import VueLiner from '@/components/parts/VueLiner.vue';
import VueButton from '@/components/parts/VueButton.vue';
import VueBarChart from '@/components/parts/VueBarChart.vue';
import moment from 'moment';

const certificateStatus = ["active", "inactive"];

@Component({
  components: {
    VueImage,
    VueTag,
    VueLiner,
    VueButton,
    VueBarChart
  },
})
export default class About extends Mixins(StoreMixin) {

    private profileMore: boolean = true;
    private certificateOnEnable: boolean[] = [];
    private tags: {name: string, link?: string}[] = [
        {name : "福井県出身", link: "https://ja.wikipedia.org/wiki/%E7%A6%8F%E4%BA%95%E7%9C%8C"},
        {name : "Webエンジニア", link: undefined}
    ];

    private get clientWidth():number {
        this.profileMore = 575 < this._client.window_width ? true : false;
        return this._client.window_width;
    };

    private get certificates(): {name: string, acquisitionDate: string, period: boolean, year: number }[] {
        return certificate;
    }

    private profile(value: number) :string {
        return profileText[value];
    };

    private profileMoreAction(value: any):void {
        this.profileMore = true;
    }

    private certificateCheckExpire(date: Date, peried: boolean, year:number):string {
        if(!peried || moment().format("YYYY-MM") < moment(date).add(year, "year").format("YYYY-MM")) {
            return certificateStatus[0];
        }
        return certificateStatus[1];
    }

}
</script>