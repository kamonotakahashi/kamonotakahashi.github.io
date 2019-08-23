//vue file import
import Vue from 'vue'

//components
import App from "./vue/App";

//router
import router from './js/router';

//Bootstrap
import "bootstrap";
import "./sass/index.scss";

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
