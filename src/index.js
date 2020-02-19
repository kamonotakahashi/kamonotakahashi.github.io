//vue file import
import Vue from 'vue'

//Parent Vue File
import App from "@/App";

//SPA Route List
import router from '@/router/router';

import "@/assets/scss/index.scss";

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');