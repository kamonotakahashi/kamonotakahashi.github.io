<template>

    <div class="contents">
        <div class="contents__wrap">
            <cheering-form />
        </div>
    </div>

</template>

<script>

import CheeringForm from "../components/parts/CheeringForm";

export default {
    name: "index",
    data: function() {
        return {
        }
    },
    components : {
        "cheering-form" : CheeringForm
    }
}
</script>

<style lang="scss">

</style>
