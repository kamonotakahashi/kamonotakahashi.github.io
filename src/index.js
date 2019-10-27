//vue file import
import Vue from 'vue'

//components
import App from "./vue/App";

//router
import router from './js/router';

import $ from "jquery";

import "./js/common";

//Start Rating
import StarRating from 'vue-star-rating';

//Bootstrap
//import "bootstrap";
import "./sass/index.scss";

//firebase
//import firebase from "firebase";
//import { firebaseConfig } from './js/firebase';

//let fb = firebase.initializeApp(firebaseConfig);
//export var firebaseDatabase = fb.database();

//Development message disable
Vue.config.devtools = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
