<template>
    <div id="app">

        <HeadComponent />
        <router-view />

    </div>
</template>

<script>
import HeadComponent from "../components/common/head";
export default {
  name : 'App',
  components: { HeadComponent }
};
</script>

<style>
</style>
