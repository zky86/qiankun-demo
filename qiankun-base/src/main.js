import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/reset.scss';
import mountApps from "./micro";
Vue.use(ElementUI);
mountApps({
  prefetch: false, // 取消预加载
  sandbox: {
    // strictStyleIsolation: true,
    // experimentalStyleIsolation: true //子应用开始沙箱样式隔离
  },
});
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-base')
