import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';



const routes = [
  { 
      path: "/",
      component: HomePage,
      name:"home-page"
  },


];
const router = new VueRouter({
  routes // short for `routes: routes`
});


export default router;