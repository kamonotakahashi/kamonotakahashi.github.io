import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/components/pages/Home';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeComponent,
    },
  ]
});
