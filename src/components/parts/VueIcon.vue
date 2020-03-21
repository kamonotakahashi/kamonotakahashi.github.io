<template>
    <div class="icon">
        <p class="icon__img">
            <img
                :src="[imageIconPath]"
                :style="addStyle"
            />
        </p>
        <p
            class="icon__text"
            :style="styleText"
        >
            <slot>a</slot>
        </p>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueButton extends Vue {
    @Prop({ required: true }) src!: string;
    @Prop({ required: false, default: 16 }) width!: number;
    @Prop({ required: false, default: 16 }) height!: number;
    @Prop({ required: false, default: 14 }) fontSize!: number;

    /* Created */
    private get imageIconPath() :string {
        return `/assets/img/icon/${this.src}`;
    }

    private get addStyle() :Object {
        return {
            "width" : `${this.width}px`,
            "height" : `${this.height}px`
        };
    }

    private get styleText() :Object {
        return {
            "font-size" :`${this.fontSize}px`
        };
    }

}
</script>