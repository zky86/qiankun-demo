import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {
  token: "============ Old ============",
  from: '/child-okayx/admin/client/index' //初始化入口
};
const actions  = initGlobalState(initialState);

export default actions;

