import config from "../config";
console.log("运行的应用：", config);
const { vueApp_url, reactApp_url, okayx_url} = config;
const apps = [
  {
    name: "vueApp", // 应用名字
    entry: vueApp_url, // 默认会加载这个html 解析里面的js(这里使用的fetch) 动态的执行(子应用必须支持跨域)
    container: "#frame", // 容器名 挂载元素
    activeRule: "/child-vue/", // 激活路径 激活规则(当访问/vue 就把这个应用挂载到#vue上)
    props: { a: 1 },
  },
  {
    name: "reactApp",
    entry: reactApp_url,
    container: "#frame",
    activeRule: "/child-react/",
  },
  {
    name: "okayxApp",
    entry: okayx_url,
    container: "#frame",
    activeRule: "/child-okayx/",
  },
  // {
  //   name: "react16",
  //   entry: "//localhost:8300",
  //   container: "#frame",
  //   activeRule: "/react16",
  // }
];
export default apps;
