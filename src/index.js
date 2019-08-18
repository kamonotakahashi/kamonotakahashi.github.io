//vue file import
import Vue from 'vue';
import Vuex from 'vuex';

//components
import Header from './header.vue';

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
