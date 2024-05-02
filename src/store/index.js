import { createStore } from 'vuex'
import userService from '@/services/userService';

export default createStore({
  state: {
    userEmail: localStorage.getItem('userEmail') || null
  },
  mutations: {
    setUserEmail(state, email){
      state.userEmail = email;
      localStorage.setItem('userEmail', email)
    }, 
    clearUserEmail(state, email){
      state.userEmail = email;
      localStorage.removeItem('userEmail')
    }
  },
  actions: {
    loginUser({ commit }, email){
      commit('setUserEmail', email)
    }, 
    async logoutUser({ commit }){
      try{
        await userService.logout();
        commit('clearUserEmail');
      }catch(e) { 
        console.error(e)
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.userEmail,
    userEmail: state =>state.userEmail
  }
})
