import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import IndexPageComponent from '../components/index';
import JobsPageComponent from '../components/job_career';

Vue.use(Router);
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPageComponent
    },
    {
      path: '/jobs',
      name: 'job_carrer',
      component: JobsPageComponent
    },
  ]
});
