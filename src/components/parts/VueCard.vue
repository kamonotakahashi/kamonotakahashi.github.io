<template>
    <div class="card">
        <div class="card__wrap" :style="[addStyle]">
            <slot name="card-title"></slot>
            <slot name="card-image"></slot>
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