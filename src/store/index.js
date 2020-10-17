import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bulletsCommandCenter: 200000,
    bulletsPlatoonA: 30000,
    bulletsPlatoonB: 20000,
  },
  getters: {
    bulletsCommandCenter: state => {
      return state.bulletsCommandCenter;
    },
    bulletsPlatoonA: state => {
      return state.bulletsPlatoonA;
    },
    bulletsPlatoonB: state => {
      return state.bulletsPlatoonB;
    },
  },
  mutations: {},
  actions: {},
  modules: {}
});
