<template>
    <div class="card">
        <div class="card__wrap" :style="[addStyle]">
            <div class="card-content">
                <div class="card-content__image">
                    <a :href="path"><slot name="card-image"></slot></a>
                </div>
                <div class="card-content__title">
                    <slot name="card-title"></slot>
                </div>
                <div class="card-content__action">
                    <div class="card-content__action-group">
                        <slot name="card-action"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fa-thumbs-good {
    color: #666;
}
.fa-thumbs-good:hover {
    color: #74DF00;
    cursor: pointer;
}
.fa-thumbs-bad {
    color: #666;
}
.fa-thumbs-bad:hover {
    color: #FE2E2E;
    cursor: pointer;
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueSiteBoxCard extends Vue {

    @Prop({ required: true }) height!: number;
    @Prop({ required: true }) path!: string;
    @Prop({ required: false, default: 0 }) goodCount!: number;
    @Prop({ required: false, default: 0 }) badCount!: number;

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