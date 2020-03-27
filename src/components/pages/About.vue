<template>
    <div class="container__wrap fluid">
        <div class="content">
            <div class="content__wrap about-content">
                <div class="flex-two-column mt-20">
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
                                <VueLiner
                                    top="10"
                                    bottom="10"
                                    color="silver"
                                />
                                <dd class="line-height-normal">
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
                    <h1 class="sub-title-2 pt-10 pb-10">
                        <span class="text-size-32">S</span>kill
                    </h1>
                    <div class="skill flex-three-column">
                        <div class="py-5 pr-5">
                            <div class="text-center pl-4 py-10">
                                <VueIcon
                                    src="/icon/program_icon.png"
                                    width="32"
                                    height="32"
                                    fontSize="17"
                                >
                                    プログラミング
                                </VueIcon>
                            </div>
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
                            <div class="text-center pl-4 py-10">
                                <VueIcon
                                    src="/icon/system_icon.png"
                                    width="32"
                                    height="32"
                                    fontSize="17"
                                >
                                    システム設計
                                </VueIcon>
                            </div>
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
                            <div class="text-center pl-4 py-10">
                                <VueIcon
                                    src="/icon/server_icon.png"
                                    width="32"
                                    height="32"
                                    fontSize="17"
                                >
                                    インフラストラクチャー
                                </VueIcon>
                            </div>
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
                    <h1 class="sub-title-2 pt-10 pb-10">
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
                                <dd class="text-center">
                                    <a href="#">{{certificate.name}}</a><!-- 資格の証明書をダウンロードできるようにする　S3から署名付きURLにて -->
                                </dd>
                                <dd class="text-center">{{certificate.acquisitionDate}}</dd>
                                <dd class="text-center">
                                    <template v-if="certificateCheckExpire(certificate.acquisitionDate, certificate.period, certificate.year)">
                                        <div class="text--success">active</div>
                                    </template>
                                    <template v-else>
                                        <div class="text--fail">inactive</div>
                                    </template>
                                </dd>
                            </dl>
                        </template>
                    </div>
                    <div class="text-right mt-5 text-size-13">
                        ※「Certificate Name」の資格名をクリックすると、資格の証明書がダウンロードできます。
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
import { profileText, certificate } from '@/config/text';
import StoreMixin from '@/store/global';
import VueImage from '@/components/parts/VueImage.vue';
import VueTag from '@/components/parts/VueTag.vue';
import VueLiner from '@/components/parts/VueLiner.vue';
import VueButton from '@/components/parts/VueButton.vue';
import VueBarChart from '@/components/parts/VueBarChart.vue';
import VueIcon from '@/components/parts/VueIcon.vue';
import moment from 'moment';

const certificateStatus = ["active", "inactive"];

@Component({
  components: {
    VueImage,
    VueTag,
    VueLiner,
    VueButton,
    VueBarChart,
    VueIcon
  },
})
export default class About extends Mixins(StoreMixin) {

    private show: boolean = false;

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

    private certificateCheckExpire(date: Date, peried: boolean, year:number):boolean {
        if(!peried || moment().format("YYYY-MM") < moment(date).add(year, "year").format("YYYY-MM")) {
            return true;
        }
        return false;
    }

}
</script>