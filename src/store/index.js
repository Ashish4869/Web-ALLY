import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    course: {},
  },
  getters: {
    getCourse: (state) => state.course,
  },
  mutations: {
    mutateCourse(state, payload) {
      state.course = payload;
      console.log(payload);
    },
  },
  actions: {
    addCourse({ commit }, course) {
      commit('mutateCourse', course);
    },
  },
  modules: {},
});
