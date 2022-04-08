import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";

let menus;
if (window.__POWERED_BY_QIANKUN__) {
  menus = [
    {
      key: "react",
      route: "/",
      title: "主页",
      url: "/child-react",
    },
    {
      key: "react-list",
      route: "/list",
      title: "列表页",
      url: "/child-react/list",
    },
    {
      key: "react-communication",
      route: "/communication",
      title: "通讯页",
      url: "/child-react/communication",
    },
    // {
    //   key: "vue",
    //   route: "/vue",
    //   title: "Vue 子应用",
    // },
  ];
} else {
  menus = [
    {
      key: "react",
      route: "/",
      title: "主页",
      url: "/react",
    },
    {
      key: "react-list",
      route: "/list",
      title: "列表页",
      url: "/react/list",
    },
    {
      key: "react-communication",
      route: "/communication",
      title: "通讯页",
      url: "/react/communication",
    },
    // {
    //   key: "vue",
    //   route: "/vue",
    //   title: "Vue 子应用",
    // },
  ];
}
const MenuTop = () => {
  const history = useHistory();
  const [refresh, setRefresh] = useState(0);
  const [selectedKeys, setSelectKeys] = useState(["react"]);

  // 切换菜单
  const changeMenu = () => {
    const { pathname } = window.location;
    // console.log(window.location);
    // console.log(menus);
    const menu = menus.find((item) => `${item.url}` === pathname);
    setSelectKeys(() => [menu ? menu.key : "react"]);
    // console.log(selectedKeys);
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
