<template>
    <div>
        <VueHeader />
        <div class="container">
            <div class="container__wrap">
                <transition mode="out-in">
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueHeader from '@/components/globals/TheHeader';

@Component({
  components: {
    VueHeader,
  },
})

export default class App extends Vue {

}
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
