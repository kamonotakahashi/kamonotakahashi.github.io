<template>
    <div class="card">
        <a @click="pathTo(path)">
        <div class="card__wrap" :style="[addStyle]">
            <div class="card-content">
                <div class="card-content__title">
                    <slot name="card-title"></slot>
                </div>
                <div class="card-content__image">
                    <slot name="card-image"></slot>
                </div>
                <div class="card-content__action">
                    
                </div>
            </div>
        </div>
        </a>
    </div>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueCard extends Vue {

    @Prop({ required: true }) height!: number;
    @Prop({ required: true }) path!: string;

    private get addStyle() :object {
        return {
            'height': `${this.height}px`
        };
    }

    private pathTo(path: string) :void {
        this.$router.push(path);
    }

}
</script>