// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import { Steps,Step } from 'iview'
import 'iview/dist/styles/iview.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.component('Steps', Steps)
Vue.component('Step', Step)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
