import { initGlobalState, MicroAppStateActions } from "qiankun";

const initialState = {
  token: "============old============"
};
const actions  = initGlobalState(initialState);

export default actions;

