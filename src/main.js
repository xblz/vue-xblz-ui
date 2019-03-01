import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

import xtComponents from '../index.js';
Vue.use(xtComponents);

// import { Table } from "./index.js";
// Vue.component(Table.name, Table);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
