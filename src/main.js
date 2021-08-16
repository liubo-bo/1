import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'

// import { request } from './network/request';

// Vue.prototype.$request = request;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
