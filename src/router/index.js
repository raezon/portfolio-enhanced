import Vue from "vue";
import VueRouter from "vue-router";
import Content from "../views/Acceuil.vue";
import Landing from "../views/Other.vue";
import NotFoundComponent from "../views/FileNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "content",
    component: Content,
  },
  {
    path: "/admin",
    name: "admin",
    component: Landing,
  },

  { path: "*", component: NotFoundComponent },
  /*,
 {
    path: "/about",
    redirect: { name: "about" },
  },*/
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
