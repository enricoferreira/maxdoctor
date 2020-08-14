import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Enrico',
    alert: false,
    msgAlert: ''
  },
  mutations: {
    CHANGE_ALERT(state, msg){
      this.state.alert = true;
      this.state.msgAlert = msg;
    },
    REMOVE_ALERT(state, msg){
      this.state.alert = false;
      this.state.msgAlert = msg;
    }
  },
  actions: {
  },
  modules: {
  }
})
