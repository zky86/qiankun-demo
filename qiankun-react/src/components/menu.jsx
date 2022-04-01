import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
const menus = [
  {
    key: "react",
    route: "/",
    title: "主页",
  },
  {
    key: "react-list",
    route: "/list",
    title: "列表页",
  },
  {
    key: "react-communication",
    route: "/communication",
    title: "通讯页",
  },
  {
    key: "vue",
    route: "/vue",
    title: "Vue 子应用",
  },
];
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "";
const MenuTop = () => {
  const history = useHistory();
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectKeys] = useState(["react"]);

  // 切换菜单
  const changeMenu = () => {
    const { pathname } = window.location;
    const menu = menus.find((item) => `${BASE_NAME}${item.route}` === pathname);
    setSelectKeys(() => [menu ? menu.key : "react"]);
  };

  useEffect(() => {
    changeMenu();
  }, [refresh]);

  useEffect(() => {
    // 组件第一次渲染会执行这个方法

    // 添加路由监听函数
    history.listen((historyLocation) => {
      changeMenu();
      // 每次路由变化都会执行这个方法
      // console.log('route history , ', history);
      // console.log('route history location , ', historyLocation);
    });
  }, [history]);

  // useEffect(() => {
  //   console.log("mounted");
  //   return () => {
  //     console.log("我死了");
  //   };
  // }, []);

  return (
    <>
      <Menu
        onClick={() => setRefresh((refresh) => ++refresh)}
        selectedKeys={selectedKeys}
        mode="horizontal"
      >
        {menus.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.route}>{item.title}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );
};
export default MenuTop;
