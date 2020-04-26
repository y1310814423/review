import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadFlag: false
  },
  mutations: {
    loadSwitch(state) {
      state.loadFlag = !state.loadFlag;
    }
  },
  actions: {},
  modules: {}
});
