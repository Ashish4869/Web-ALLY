import Vue from 'vue';
import App from './App.vue';
import router from './router';
import bootstrap from './plugins/bootstrap';

import Particles from 'particles.vue';
import store from './store'

Vue.use(Particles);

Vue.config.productionTip = false;

new Vue({
  router,
  bootstrap,
  store,
  render: (h) => h(App)
}).$mount('#app');
