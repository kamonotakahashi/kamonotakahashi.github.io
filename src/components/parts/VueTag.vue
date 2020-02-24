<template>
    <div class="tag">
        <template v-for="(tag, index) in tags">
            <li :key="index">
                <template v-if="tag.link">
                    <a :href="tag.link" target="_blank">{{tag.name}}</a>
                </template>
                <template v-else>
                    {{tag.name}}
                </template>
            </li>
        </template>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';


@Component
export default class VueTag extends Vue {
    @Prop({ required: true }) tags!: {name: string, link?: string}[];
}
</script>