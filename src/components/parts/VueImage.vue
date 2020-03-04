<template>
    <div class="img-position">
        <img
            class="image"
            :src="src"
            :class="[imageType]"
            :width="width"
            :height="height"

        />
    </div>
</template>

<style lang="scss" scoped>
.img-position {

}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueImage extends Vue {
    @Prop({ required: true }) src!: string;
    @Prop({ default: 'picture', required: false }) type!: string;
    @Prop({ required: false }) width!: string;
    @Prop({ required: false }) height!: string;
    @Prop({ required: false }) align!: string;
    @Prop({ required: false }) valign!: string;

    private get imageType(): string {
        return `img-${this.type}`;
    }

}
</script>