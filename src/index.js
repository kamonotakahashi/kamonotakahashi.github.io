//vue file import
import Vue from 'vue'

//components
import App from "./vue/App";

//router
import router from './js/router';

//Bootstrap
//import "bootstrap";
import "./sass/index.scss";

//firebase
//import firebase from "firebase";
//import { firebaseConfig } from './js/firebase';

//let fb = firebase.initializeApp(firebaseConfig);
//export var firebaseDatabase = fb.database();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
