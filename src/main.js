import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1200
});
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
