import Vue from "vue";
import Vuex from "vuex";
import products from "./products";
import user from "./users";

Vue.use(Vuex);

const store = new Vuex.Store({
  // namespaced: true,
  strict: process.env.NODE_ENV !== "production",


  modules: {
    products,
    user
  }
});
export default store;
