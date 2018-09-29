import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './route'
import store from './store/index.js';
import '@/style/common.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'local';
Vue.config.performance = true;
Vue.config.errorHandler = function() {
	
}

sync(store, router);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')