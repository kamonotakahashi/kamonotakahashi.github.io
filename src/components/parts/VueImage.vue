<template>
    <div>
        <img
            class="image"
            :src="src"
            :class="{ 'img-avator' : imageType }"
            :width="width"
            :height="height"

        />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueImage extends Vue {
    @Prop({ required: true }) src!: string;
    @Prop({ default: 'picture', required: false }) type!: string;
    @Prop({ required: false }) width!: string;
    @Prop({ required: false }) height!: string;

    private get imageType(): boolean {
        return this.type == 'avator';
    }

}
</script>