<template>
    <div class="portfolio">

        <div class="portfolio__wrap">

            <p>
                <VueButton type="dark">＜</VueButton>
            </p>

            <VueSiteBoxCard height="260" path="/" goodCount="100" badCount="0">
                <template v-slot:card-title>
                    あろはサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
                <template v-slot:card-action>
                    <dl>
                        <dd>
                            <time>2020/04/10</time>
                        </dd>
                        <dd>
                            <i class="fas fa-thumbs-up fa-thumbs-good"></i>
                            <i class="fas fa-thumbs-down fa-thumbs-bad"></i>
                        </dd>
                    </dl>
                </template>
            </VueSiteBoxCard>

            <VueSiteBoxCard height="260" path="/">
                <template v-slot:card-title>
                    いろいろサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
                <template v-slot:card-action>
                    <dl>
                        <dd>
                            <time>2020/04/10</time>
                        </dd>
                        <dd>
                            <i class="fas fa-thumbs-up fa-thumbs-good"></i>
                            <i class="fas fa-thumbs-down fa-thumbs-bad"></i>
                        </dd>
                    </dl>
                </template>
            </VueSiteBoxCard>

            <VueSiteBoxCard height="260" path="/">
                <template v-slot:card-title>
                    うろうろサイト
                </template>
                <template v-slot:card-image>
                    <img src="https://placehold.jp/150x150.png" width="100%" height="200" />
                </template>
                <template v-slot:card-action>
                    <dl>
                        <dd>
                            <time>2020/04/10</time>
                        </dd>
                        <dd>
                            <i class="fas fa-thumbs-up fa-thumbs-good"></i>
                            <i class="fas fa-thumbs-down fa-thumbs-bad"></i>
                        </dd>
                    </dl>
                </template>
            </VueSiteBoxCard>

            <p>
                <VueButton type="dark" height="100">＞</VueButton>
            </p>

        </div>

    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import VueSiteBoxCard from '@/components/parts/VueSiteBoxCard.vue';
import VueButton from '@/components/parts/VueButton.vue';

@Component({
    components: {
        VueSiteBoxCard,
        VueButton
    }
})
export default class VueHomePortfolio extends Vue {



}
</script>