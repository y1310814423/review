import Vue from "vue";
import VueRouter from "vue-router";
import RouterView from "../views/RouterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/RouterView",
    name: "RouterView",
    component: RouterView
  },
  {
    path: "/VuexView",
    name: "VuexView",
    component: () => import("../views/VuexView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "Review",
  routes
});

export default router;
