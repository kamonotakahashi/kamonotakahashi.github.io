<template>
    <div>
        <vueHeader />

        <div class="container">
            <div class="container__wrap">
                <transition mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
import vueHeader from "@/components/globals/TheHeader";
export default {
  name: "app",
  data: function() {
      return {
      }
  },
  methods: {
      toggleBtn: function() {
          this.show = !this.show
      }
  },
  components: {
    vueHeader,
  },
};
</script>

<style lang="scss" scoped>
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
      transform: translate(0, 100%);
      opacity: 0;
    }
    .v-leave-active {
      transition: all .5s 0s ease;
    }
</style>
