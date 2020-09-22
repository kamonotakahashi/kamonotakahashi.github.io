<template>
    <div class="container__wrap">
        <pc-home-page />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">

import { Vue, Component, Mixins, Watch } from 'vue-property-decorator';
import StoreMixin from '@/store/global';

import PcHomePage from '@/components/pages/index/includes/_pc.vue';

//Components

@Component({
    components: {
        PcHomePage
    }
})
export default class About extends Mixins(StoreMixin) {

    /* Methotds */
    /* mounted */
    mounted() {

    };

}
</script>