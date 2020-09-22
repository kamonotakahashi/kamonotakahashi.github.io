import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeComponent from '@/components/pages/index/Home.vue';
import AboutComponent from '@/components/pages/About.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeComponent,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent,
    },
  ]
});