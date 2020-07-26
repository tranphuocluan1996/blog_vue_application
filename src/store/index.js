import Vue from "vue";
import Vuex from "vuex";

import listBlogs from "../mock/blog";

Vue.use(Vuex);



const store = new Vuex.Store({
  state: 
    {
      listBlogs
    }

});

export default store;