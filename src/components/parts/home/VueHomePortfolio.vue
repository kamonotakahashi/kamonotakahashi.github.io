<template>
    <div class="portfolio">

        <div class="portfolio__wrap">
            <VueCard height="250">
                <template v-slot:card-title>
                    あろはサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
            </VueCard>

            <VueCard height="250">
                <template v-slot:card-title>
                    いろいろサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
            </VueCard>

            <VueCard height="250">
                <template v-slot:card-title>
                    うろうろサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
            </VueCard>

        </div>

    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueCard from '@/components/parts/VueCard.vue';

@Component({
    components: {
        VueCard
    }
})
export default class VueHomePortfolio extends Vue {

}
</script>