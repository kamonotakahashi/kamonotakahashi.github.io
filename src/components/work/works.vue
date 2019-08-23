<template>
    <div id="works">
        <div class="card col-15" style="width: 18rem;" v-for="value in worklist">
        <a v-bind:href="value.url">
            <img class="card-img-top" v-bind:src="value.image" style="height:15rem;">
        </a>
            <div class="card-body">

            <h6 class="card-title">{{ value.title }}</h6>
            <p class="card-text">
                {{ value.body }}
            </p>
            <a v-bind:href="value.url" class="btn btn-info">詳細表示</a>
            </div>
        </div>
    </div>
</template>

<script>
import {firebaseDatabase} from '../../index'
export default {
  name: 'Works',
  data () {
      return {
          worklist : [],
      }
  },
  mounted() {
      firebaseDatabase.ref('data/works').on('value', (res) => {
          this.worklist = res.val();
      })
  }
}
</script>

<style lang="sass">

</style>
