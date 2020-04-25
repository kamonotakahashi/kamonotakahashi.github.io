<template>
    <div class="slider">
        <div class="slider__wrap">
            <i
                v-if="directiveDownClickAction"
                class="fas fa-angle-down fa-customize"
                @click="clickEvent"
            ></i>
            <i
                class="fas fa-angle-up fa-customize"
                v-else
                @click="clickEvent"
            ></i>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.fa-customize {
    font-size: 64px;
    &:hover {
        cursor: pointer;
        color: #666;
    }
}
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VueButton extends Vue {
    /* Props */
    @Prop({ required: true }) contentLimit!: number;
    @Prop({ required: true }) currentContent!: number;

    /* Date */
    private directive: String = '+'; //default directive
    private directiveDownClickAction: Boolean = true;

    /* Mounted */
    private clickEvent() :any {
        if(this.currentContent === this.contentLimit) {
            this.directive = '-';
        } else if(this.currentContent === 0) {
            this.directive = '+';
        } else {
            if(this.directiveDownClickAction && this.currentContent < this.contentLimit - 1 || !this.directiveDownClickAction && this.currentContent === 1) {
                this.directiveDownClickAction = true;
            } else {
                this.directiveDownClickAction = false;
            }
        }
        return this.$emit('sliderClickEvent', eval(`${this.currentContent} ${this.directive} 1`));
    }
    /* Created */
}
</script>