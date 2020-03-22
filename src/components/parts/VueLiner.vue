<template>
    <div>
        <hr
            class="liner color__silver"
            :style="[addStyle]"
        />
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class VueLiner extends Vue {
    @Prop({ default: 2, required: false }) top!: number;
    @Prop({ default: 2, required: false }) bottom!: number;
    @Prop({ default: 'silver', required: false }) color!: string;

    private get addStyle() :Object {
        return {
            "margin-top": `${this.top}px`,
            "margin-bottom": `${this.bottom}px`
        };
    }

    private get lineColor() :string {
        return `color__${this.color}`;
    }

}
</script>