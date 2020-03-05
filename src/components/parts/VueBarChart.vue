<template>
    <div class="chart-bar">
        <div
            class="chart-bar__info"
            :class="bgColor"
            :data-total="persent"
        >
            {{value}}
            <span class="chart-bar__info__persent">
                {{persent}}
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
    @Prop({ required: true }) persent!: number;
    @Prop({ required: true }) value!: string;
    @Prop({ required: false, default: 'gray' }) color!: string;

    private get bgColor(): string {
        return `bg-${this.color}`;
    }

}
</script>