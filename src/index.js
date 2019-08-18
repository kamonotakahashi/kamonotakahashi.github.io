//vue file import
import Vue from 'vue';
import Vuex from 'vuex';

import { myTestMethod } from './test.js';

//components
import Header from './header.vue';

myTestMethod();

//css
//import 'bootstrap';

Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  components: {
      "my-component" : Header
  },
})
