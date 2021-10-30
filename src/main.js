import Vue from 'vue'
import App from './App.vue'
import vuex from 'vuex'
import router from '@/core/router';
import storeIndex from '@/core/store';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  vuex,
  storeIndex
}).$mount('#app')
