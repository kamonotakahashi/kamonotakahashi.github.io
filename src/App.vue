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
import { Component, Vue, Mixins } from 'vue-property-decorator';
import VueHeader from '@/components/globals/TheHeader';
import StoreMixin from '@/store/global';

@Component({
  components: {
    VueHeader,
  },
})

export default class App extends Mixins(StoreMixin) {

  private client : {width:number, height:number} = {
    width:0,
    height: 0
  }

  /* Methods */
  private handleResize():void {

    //Storeに書き込み
    this.setWindow(window);
    this.client.width = this.clientWindowWidth || 0;
    this.client.height = this.clientWindowHeight || 0;
  }

  /* Mounted */
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  /* BeforeDestroy */
  beforeDestroy() {
    window.addEventListener('resize', this.handleResize);
  }

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
