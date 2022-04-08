<template>
  <div id="app-base">
    <div class="app-wrapper">
      <div class="sidebar-container">
        <main-menu />
      </div>
      <div class="main-container">
        <router-view v-show="$route.name" />
        <section v-show="!$route.name" id="frame"></section>
        <!-- <div id="vue"></div>
        <div id="react"></div>  -->
        <!-- 
        <el-menu default-active="/" :router="true" mode="horizontal">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/vue">vue应用</el-menu-item>
          <el-menu-item index="/react">react应用</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="vue"></div>
        <div id="react"></div> -->
      </div>
    </div>
  </div>
</template>
<script>
import mainMenu from "./components/menu.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    mainMenu,
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
#app-base,
#frame {
  height: 100%;
}
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.sidebar-container {
  transition: width 0.28s;
  width: 210px;
  background-color: #1f2d3d;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
  height: 100%;
}
</style>