import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/reset.css";
// Vue.config.productionTip = false
import actions from "./shared/actions";
let instance = null;

if (window.__POWERED_BY_QIANKUN__) {
  // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 默认独立运行
  render();
}

function render(props = {}) {
  // console.log(11, props)
  const { container } = props;
  if (props) {
    console.log(11, props)
    // 注入 actions 实例
    actions.setActions(props);
  }

  // instance = new Vue({
  //   router,
  //   render: (h) => h(App),
  // }).$mount("#app"); // 这里是挂载到自己的html中  基座会拿到这个挂载后的html 将其插入进去

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')

}

// 父应用加载子应用，子应用必须暴露三个接口：bootstrap、mount、unmount
export async function bootstrap(props) {
  // console.log(props);
}
export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  instance.$destroy();
  console.log("VueMicroApp unmount");
  instance = null;
}
