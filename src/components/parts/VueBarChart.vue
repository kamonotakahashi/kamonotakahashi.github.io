<template>
    <div class="chart-bar">
        <div
            class="chart-bar__info"
            :class="[bgColor]"
            :style="{ width : changeWidth }"
            :data-total="percent"
        >
            {{value}}
            <span class="percent">
                {{percent}}%
            </span>
        </div>
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

    private get bgColor(): string {
        return `chart-bar__bg-${this.color}`;
    }

    private get changeWidth() :string {
        return `${this.percent}%`;
    }

}
</script>