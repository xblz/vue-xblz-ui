import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
    },
    {
      path: '/xt-ps-table',
      name: 'xt-ps-table',
      component: () => import(/* webpackChunkName: "table" */ '../views/table.vue')
    }
  ]
});
