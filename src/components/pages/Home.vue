<template>
    <div class="container__wrap">
        <div class="content">
            <div class="content__headline portfolio">
                <div class="content__headline__title">
                    Portfolio
                </div>
            </div>
            <div class="content__headline code-and-system">
                <div class="content__headline__title">
                    Code And System
                </div>
            </div>
            <div class="content__headline works">
                <div class="content__headline__title">
                    Works
                </div>
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