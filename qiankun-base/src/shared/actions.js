import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {
  token: "============ Old ============",
  from: ''
};
const actions  = initGlobalState(initialState);

export default actions;

