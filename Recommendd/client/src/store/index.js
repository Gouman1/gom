import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import newPage from './new-vuex'
import permission from './permission'
import {getters} from './getters'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    user,
    newPage,
    permission
  },
  getters
});
