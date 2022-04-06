import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import "antd/dist/antd.css";
import actions from "./shared/actions";
// import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function render(props = {}) {
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  ReactDOM.render(<App />, document.getElementById("root"));
}

export async function bootstrap() {
  console.log("react app bootstraped");
}

export async function mount(props) {
  // console.log("reactApp mount", props);
  render(props);
}

export async function unmount() {
  console.log("react unmount");
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
}
