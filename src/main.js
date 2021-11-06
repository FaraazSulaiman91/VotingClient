import Vue from 'vue'
import App from './App.vue'
import router from '@/core/router';
import store from '@/core/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
