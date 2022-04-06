import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {
  token: "============old============",
  from: ''
};
const actions  = initGlobalState(initialState);

export default actions;

