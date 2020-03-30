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
                        <VueIcon
                            src="/icon/human_icon.png"
                            width="84"
                            height="84"
                        />
                    </template>
                    <template v-slot:card-subtitle>
                        a
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
import VueIcon from '@/components/parts/VueIcon.vue';

@Component({
  components: {
    VueCard,
    VueIcon
  },
})
export default class About extends Mixins(StoreMixin) {



}
</script>