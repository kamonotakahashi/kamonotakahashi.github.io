<template>
    <div class="tag">
        <ul>
            <li  v-for="(tag, index) in tags" :key="index" class="mr-10">
                <template v-if="tag.link">
                    <a :href="tag.link" target="_blank">{{tag.name}}</a>
                </template>
                <template v-else>
                    {{tag.name}}
                </template>
            </li>
        </ul>
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