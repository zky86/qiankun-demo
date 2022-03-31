const apps = [
  {
    name: "vueApp", // 应用名字
    entry: "//localhost:8100", // 默认会加载这个html 解析里面的js(这里使用的fetch) 动态的执行(子应用必须支持跨域)
    container: "#frame", // 容器名 挂载元素
    activeRule: "/vue", // 激活路径 激活规则(当访问/vue 就把这个应用挂载到#vue上)
    props: { a: 1 },
  },
  {
    name: "reactApp",
    entry: "//localhost:8200",
    container: "#frame",
    activeRule: "/react",
  },
];
export default apps;
