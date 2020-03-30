<template>
    <div class="card">
        <div class="card__wrap" :style="[addStyle]">
            <a href="javascript: ;">
            <div class="card-content">
                <div class="card-content__title">
                    <slot name="card-title"></slot>
                </div>
                <div class="card-content__image">
                    <slot name="card-image"></slot>
                </div>
                <div class="card-content__subtitle">
                    <slot name="card-subtitle"></slot>
                </div>
            </div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueCard extends Vue {

    @Prop({ required: true }) height!: number;

    private get addStyle() :object {
        return {
            'height': `${this.height}px`
        };
    }

}
</script>