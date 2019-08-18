//vue file import
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

//components
import Header from './header.vue';
import Contents from "./contents.vue";

//Bootstrap
import "bootstrap";
import "./index.scss";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {
      "my-component-header" : Header,
      "my-component-content" : Contents
  },
})
