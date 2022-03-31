import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import homeList from "../views/homeList.vue";
import communication from "../views/communication.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/homeList",
    name: "homeList",
    component: homeList,
  },
  {
    path: "/communication",
    name: "communication",
    component: communication,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/communication.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "",
  routes,
});

export default router;
