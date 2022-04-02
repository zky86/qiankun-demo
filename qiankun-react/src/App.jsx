import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/list";
import MenuTop from "./components/menu";
import Communication from "./pages/communication";
const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/react" : "/";
const App = () => {
  return (
    <Router basename={BASE_NAME}>
      <section>
        <MenuTop></MenuTop>
        <Suspense fallback={null}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/communication" component={Communication} />
          </Switch>
        </Suspense>
      </section>
    </Router>
  );
};
export default App;
