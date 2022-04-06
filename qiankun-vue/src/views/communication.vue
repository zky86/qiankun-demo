<template>
  <div class="communication">
    <h3>通信页</h3>
    <br />
    <div><div class="primary" @click="setVal">设置值</div></div>
    <br />
    当前值： {{ token }}
  </div>
</template>

<script>
// @ is an alias to /src
import actions from "../shared/actions";
export default {
  name: "communication",
  components: {},
  data() {
    return {
      token: "",
    };
  },
  mounted() {
    if (window.__POWERED_BY_QIANKUN__) {
      actions.onGlobalStateChange((state, prevState) => {
        // state: 变更后的状态; prevState: 变更前的状态
        // console.log("主应用观察者：token改变前的值", prevState.token);
        // console.log("主应用观察者：token改变后的值", state.token);
        this.token = state.token;
      });
    }
  },
  methods: {
    setVal() {
      let token = "============ New Vue ============";
      let from = "from-vue";
      actions.setGlobalState({ from });
      actions.setGlobalState({ token });
    },

    getVal() {},
  },
};
</script>
<style >
.primary {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>
