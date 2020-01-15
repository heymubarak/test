import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './app.css'
import router from './router'
import * as VeeValidate from 'vee-validate';
import store from './store';
import VModal from 'vue-js-modal';
import Filter from './filters';
// import {ValidationProvider} from 'vee-validate' 
// import { extend } from 'vee-validate';
// import { required } from 'vee-validate/dist/rules';

// extend('require', {
//   ...required,
//   message: 'This field is required'
// });


Vue.config.productionTip = false
Vue.use(VModal);
Vue.use(VeeValidate);
// Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  store,
  VModal,
  Filter,
  VeeValidate,
  render: h => h(App),
}).$mount('#app')
