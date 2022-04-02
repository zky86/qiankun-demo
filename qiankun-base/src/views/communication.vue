<template>
  <div class="communication">
    <h3>基座通信页</h3>
    <br />
    <div><el-button type="primary" @click="setVal">设置值</el-button></div>
    <br />
    当前值： {{ token }}
  </div>
</template>
<script>
import actions from "../shared/actions";
export default {
  name: "communication",
  data() {
    return {
      token: "",
    };
  },
  components: {},
  mounted() {
    actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      console.log("主应用观察者：token改变前的值", prevState.token);
      console.log("主应用观察者：token改变后的值", state.token);
      this.token = state.token;
      // this.$router.push("/");

      this.$message({
        showClose: true,
        message: "设置值成功，3秒后跳到子应用查看值。",
        type: "success",
        duration: 3000,
        onClose: () => {
          this.$router.push("/vue/communication");
        },
      });
    });
  },
  methods: {
    setVal() {
      let token = "============NEW============";
      actions.setGlobalState({ token });
    },

    getVal() {
      getVal.log(1);
    },
  },
};
</script>
<style>
.communication {
  padding: 20px;
}
</style>
