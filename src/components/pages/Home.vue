<template>
    <div class="container__wrap">
        <div class="content">
            <div class="content__headline">
                <div class="content__headline__title">
                    ポートフォリオ
                </div>
            </div>
            <div class="content__cardbox">

                <VueCard
                    height="300"
                >
                    <template v-slot:card-title>
                        自己紹介
                    </template>
                    <template v-slot:card-image>
                        -
                    </template>
                </VueCard>

                <VueCard
                    height="300"
                >
                    <template v-slot:card-title>
                        自己紹介
                    </template>
                    <template v-slot:card-image>
                        -
                    </template>
                </VueCard>

                <VueCard
                    height="300"
                >
                    <template v-slot:card-title>
                        自己紹介
                    </template>
                    <template v-slot:card-image>
                        -
                    </template>
                </VueCard>

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

@Component({
  components: {
    VueCard
  },
})
export default class About extends Mixins(StoreMixin) {



}
</script>