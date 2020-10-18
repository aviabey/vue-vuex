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
  mutations: {
    UpdateCommandCenterBulletCount(state, newCount) {
      state.bulletsCommandCenter = newCount;
    },
    UpdatePlatoonABulletCount(state, newCount) {
      state.bulletsPlatoonA = newCount;
    },
    UpdatePlatoonBBulletCount(state, newCount) {
      state.bulletsPlatoonB = newCount;
    }
  },
  actions: {
    UpdateCommandCenterBulletCount(context, newCount) {
      context.commit('UpdateCommandCenterBulletCount', newCount)

      setTimeout(() => {
        console.log("I'm inside the action method of store");
      }, 2000)
    },
    UpdatePlatoonABulletCount(context, newCount) {
      context.commit('UpdatePlatoonABulletCount', newCount)
    },
    UpdatePlatoonBBulletCount(context, newCount) {
      context.commit('UpdatePlatoonBBulletCount', newCount)
    }
  },
  modules: {}
});
