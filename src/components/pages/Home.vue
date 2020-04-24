<template>
    <div class="container__wrap">
        <div class="content">
            <div class="content__headline portfolio">
                <div class="content__headline__title">
                    <div class="content__headline__title-wrap">
                    <VueLiner
                        top="10"
                        left="50"
                        right="50"
                        bottom="20"
                        height="4"
                        color="silver"
                    />
                        portfolio
                    </div>
                </div>
                <div class="content__headline__entry">
                    <VueHomePortfolio></VueHomePortfolio>
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

@Component({
    components: {
        VueHomePortfolio,
        VueLiner
    }
})
export default class About extends Mixins(StoreMixin) {

}
</script>