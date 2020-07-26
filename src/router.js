import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import HomePage from './pages/HomePage.vue';
import About from "./pages/About.vue";
import Contact from './pages/Contact.vue';
import PostDetail from "./pages/PostDetail.vue";


const routes = [
  { 
      path: "/",
      component: HomePage,
      name:"home-page"
  },
  { 
      path: "/about",
      component: About,
      name:"about"
  },
  { 
      path: "/contact",
      component: Contact,
      name:"contact"
  },
  { 

    // dynamic route matching.  : coi như 1 biến có thể thay đổi được === the-thao, giai-tri, trang-chu
    //                           title là dc biến đổi bởi dấu - không còn là khoảng trắng
    //                           . id cách nhau = dấu chấm
      path: "/post-detail/:title.:id", 
      component: PostDetail,
      name:"post-detail"
  },
];
const router = new VueRouter({
  routes // short for `routes: routes`
});


export default router;