import Router from 'vue-router';

import HomeComponent from '../components/pages/Home';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeComponent,
    },
  ]

});
