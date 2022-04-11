<template>
  <el-menu
    class="menu-side"
    @open="handleOpen"
    @close="handleClose"
    ref="menu-side"
    :default-active="selectKey + ''"
  >
    <!-- <router-link
      v-for="(item, index) in menus"
      :key="item.key"
      :to="{ path: item.path }"
    > -->
      <el-menu-item v-for="(item, index) in menus" :index="index + ''" :key="item.key" @click=goUrl(item.path)>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    <!-- </router-link> -->
  </el-menu>
</template>

<script>
import router from "../router";
import actions from "../shared/actions";
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
          key: "client",
          title: "终端管理",
          path: "/child-okayx/admin/client/index",
        },
        {
          index: "1",
          key: "menu",
          title: "菜单管理",
          path: "/child-okayx/admin/menu/index",
        },
        {
          index: "2",
          key: "home",
          title: "基座主页",
          path: "/",
        },
        {
          index: "3",
          key: "communication",
          title: "基座通讯页",
          path: "/communication",
        },
        {
          index: "4",
          key: "Vue",
          title: "Vue 子应用",
          path: "/child-vue/",
        },
        {
          index: "5",
          key: "VueList",
          title: "Vue 列表页",
          path: "/child-vue/list",
        },
        {
          index: "6",
          key: "VueCommunication",
          title: "Vue 通讯页",
          path: "/child-vue/communication",
        },
        {
          index: "7",
          key: "React",
          title: "React 子应用",
          path: "/child-react/",
        },
        {
          index: "8",
          key: "ReactList",
          title: "React 列表页",
          path: "/child-react/list",
        },
        {
          index: "9",
          key: "ReactCommunication",
          title: "React 通讯页",
          path: "/child-react/communication",
        },
        // {
        //   index: "8",
        //   key: "react16",
        //   title: "react16 子应用",
        //   path: "/react16",
        // }
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
      // console.log(currentMenu)
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
    goUrl(path) {
      // console.log('跳转路由')
      let from = path;
      actions.setGlobalState({ from });
      this.$router.push({ path: from });
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
