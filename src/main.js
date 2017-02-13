import Vue from 'vue';

import Kui from '../kui';
import Index from './Index';
import store from './store';
import router from './router';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<Index/>',
  components: { Index }
});
