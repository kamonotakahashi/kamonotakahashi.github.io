<template>
    <div>
        <button class="btn" :class="colorType">
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueButton extends Vue {
    @Prop({ required: false, default: 'light' }) type!: string;
    @Prop({ required: false, default: '100' }) width!: number;

    get colorType() :string {
        return this.type;
    }
}
</script>