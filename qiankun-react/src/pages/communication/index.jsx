import React, { useState, useEffect } from "react";
import actions from "../../shared/actions";
import "./index.css";
import { useHistory } from "react-router-dom";
const Status = () => {
  const history = useHistory();
  const [token, setToken] = useState();
  useEffect(() => {
    // console.log(window.__POWERED_BY_QIANKUN__);
    if (window.__POWERED_BY_QIANKUN__) {
      actions.onGlobalStateChange((state) => {
        const { token } = state;
        setToken(token);
      }, true);
    }
  }, [history]);

  const setVal = () => {
    let token = "============ New React ============";
    let from = "from-react";
    actions.setGlobalState({ from });
    actions.setGlobalState({ token });
    setToken(token);
  };

  return (
    <div style={{ padding: 20 }}>
      <section>通信页</section>
      <br />
      <div
        className="primary"
        onClick={() => {
          setVal();
        }}
      >
        设置值
      </div>
      <br />
      <br />
      当前值： {token}
    </div>
  );
};
// const Status = () => <section style={{ padding: 20 }}>通信页</section>;

export default Status;
