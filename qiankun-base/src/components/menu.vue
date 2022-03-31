<template>
  <el-menu
    class="menu-side"
    @open="handleOpen"
    @close="handleClose"
    ref="menu-side"
    :default-active="selectKey + ''"
  >
    <router-link
      v-for="(item, index) in menus"
      :key="item.key"
      :to="{ path: item.path }"
    >
      <el-menu-item :index="index + ''">
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import router from "../router";
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  data() {
    return {
      selectKey: '',
      menus: [
        {
          index: "0",
          key: "home",
          title: "基座主页",
          path: "/",
        },
        {
          index: "1",
          key: "homeList",
          title: "基座列表页",
          path: "/homeList",
        },
        {
          index: "2",
          key: "Vue",
          title: "Vue 子应用",
          path: "/vue",
        },
        {
          index: "3",
          key: "React",
          title: "React 子应用",
          path: "/react",
        },
        {
          index: "4",
          key: "VueList",
          title: "Vue 列表页",
          path: "/vue/list",
        },
        {
          index: "5",
          key: "ReactList",
          title: "React 列表页",
          path: "/react/list",
        },
        {
          index: "6",
          key: "MainCommunication",
          title: "主应用通讯页",
          path: "/communication",
        },
        {
          index: "7",
          key: "VueCommunication",
          title: "Vue 通讯页",
          path: "/vue/communication",
        },
        {
          index: "8",
          key: "ReactCommunication",
          title: "React 通讯页",
          path: "/react/communication",
        },
      ],
    };
  },
  mounted() {
    this.initMenus();
  },
  methods: {
    // 初始化菜单
    initMenus() {
      const currentMenu = this.findCurrentMenu(this.menus, this.$route.path);
      if (!currentMenu) return;
      const { index } = currentMenu;
      this.selectKey = index;
    },
    // 匹配规则
    findCurrentMenu(menus, currentPath) {
      for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        const { path } = menu;
        if (path === currentPath) return menu;

        const currentMenu = this.findCurrentMenu(
          menu.children || [],
          currentPath
        );
        if (currentMenu) return currentMenu;
      }
      return null;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style >
#app-base .menu-side {
  background-color: #1f2d3d;
  color: #fff;
}
.menu-side li {
  display: block;
}
#app-base .menu-side .el-menu-item {
  color: #fff;
}
#app-base .menu-side .el-menu-item:focus,
#app-base .menu-side .el-menu-item:hover {
  outline: 0;
  background-color: #001528;
}
#app-base .menu-side .is-active {
  background-color: #001528;
  color: #1b8ddc;
}
#app-base .menu-side {
  border-right: none;
}
</style>
