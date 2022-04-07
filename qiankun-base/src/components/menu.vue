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
      selectKey: "",
      menus: [
        {
          index: "0",
          key: "home",
          title: "基座主页",
          path: "/",
        },
        // {
        //   index: "1",
        //   key: "homeList",
        //   title: "基座列表页",
        //   path: "/homeList",
        // },
        {
          index: "1",
          key: "communication",
          title: "基座通讯页",
          path: "/communication",
        },
        {
          index: "2",
          key: "Vue",
          title: "Vue 子应用",
          path: "/vue",
        },
        {
          index: "3",
          key: "VueList",
          title: "Vue 列表页",
          path: "/vue/list",
        },
        {
          index: "4",
          key: "VueCommunication",
          title: "Vue 通讯页",
          path: "/vue/communication",
        },
        {
          index: "5",
          key: "React",
          title: "React 子应用",
          path: "/react",
        },
        {
          index: "6",
          key: "ReactList",
          title: "React 列表页",
          path: "/react/list",
        },
        {
          index: "7",
          key: "ReactCommunication",
          title: "React 通讯页",
          path: "/react/communication",
        },
        {
          index: "8",
          key: "react16",
          title: "react16 子应用",
          path: "/react16",
        }
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
      // console.log(this.menus);
      // console.log(this.$route.path);
      if (!currentMenu) return;
      const { index } = currentMenu;
      this.selectKey = index;
      // console.log(index);
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

<style lang="scss" scoped>
body {
    margin: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
    font-variant: tabular-nums !important;
    line-height: 1.5715 !important;
    background-color: #fff;
    font-feature-settings: 'tnum', "tnum" !important;
}

#app-base .menu-side {
  background-color: #1f2d3d;
  color: #fff;
  border-right: none;
  li {
    display: block;
  }
  .el-menu-item {
    color: #fff;
    &:focus,
    &:hover {
      outline: 0;
      background-color: #001528;
    }
  }
  .is-active {
    background-color: #001528;
    color: #1b8ddc;
  }
}

</style>
