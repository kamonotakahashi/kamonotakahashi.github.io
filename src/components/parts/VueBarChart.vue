<template>
    <div class="chart-bar">
        <transition>
        <div
            class="chart-bar__info"
            :class="[bgColor]"
            :style="addStyle"
            :data-total="percent"
        >
            {{value}}
            <span class="percent">
                {{percent}}%
            </span>
        </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueButton extends Vue {
    @Prop({ required: true, default: 10 }) percent!: number;
    @Prop({ required: true }) value!: string;
    @Prop({ required: false, default: 'gray' }) color!: string;
    @Prop({ required: false, default: 14 }) fontSize!: number;

    /* Created */
    private get bgColor(): string {
        return `chart-bar__bg-${this.color}`;
    }

    private get addStyle() :Object {
        return {
                'width' : `${this.percent}%`,
                'font-size': `${this.fontSize}px`
        };
    }

}
</script>