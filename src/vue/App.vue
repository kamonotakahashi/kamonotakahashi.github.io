<template>
    <div id="app">

        <HeadComponent />

        <transition mode="out-in">
            <router-view />
        </transition>

    </div>
</template>

<script>
import HeadComponent from "../components/common/head";
export default {
  name : 'App',
  components: { HeadComponent },
  data: function() {
      return {
      }
  },
  methods: {
      toggleBtn: function() {
          this.show = !this.show
      }
  }
};
</script>

<style lang="scss">
    .v-enter {
      transform: translate(0, 0);
      opacity: 0;
    }
    .v-enter-to {
      opacity: 1;
    }
    .v-enter-active {
      transition: all 1s 0s ease;
    }
    .v-leave {
      transform: translate(0, 0);
      opacity: 1;
    }
    .v-leave-to {
      width: 50%;
      transform: translate(0, 100%);
      opacity: 0;
    }
    .v-leave-active {
      width: 50%;
      transition: all .5s 0s ease;
    }
</style>
