import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bulletsCommandCenter: 200000
  },
  getters: {
    bulletsCommandCenter: state => {
      return state.bulletsCommandCenter;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
