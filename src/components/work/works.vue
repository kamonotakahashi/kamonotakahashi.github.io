<template>
    <div id="works">

        <li v-for="value in object">
            <li v-for="val in value">
                {{ val }}
            </li>
        </li>

        <div class="card col-10" style="width: 18rem;">

          <div class="card-body">
            <h5 class="card-title">a</h5>
            <p class="card-text">以下のテキストを追加のコンテンツへの自然な導入としてサポート。 カードのコンテンツ カードのコンテンツ</p>
            <a href="#" class="btn btn-primary">ボタン</a>
          </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
export default {
  name: 'Works',
  data () {
      return {
          object : {
              level1 : {
                  test : "A"
              }
          }
      }
  }
}
</script>

<style lang="sass">

</style>
