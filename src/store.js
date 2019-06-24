import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hiraganaNumber: '',
    katakanaNumber: '',
    kanjiNumber: '',
    showMenu: false
  },
  getters: {
    getHiraganaNumber: state => state.hiraganaNumber,
    getKatakanaNumber: state => state.katakanaNumber,
    getKanjiNumber: state => state.kanjiNumber,
    getShowMenu: state => state.showMenu
  },
  mutations: {
    SET_NUMBERS: (state, payload) => {
      state.hiraganaNumber = payload.hiraganaNumber
      state.katakanaNumber = payload.katakanaNumber
      state.kanjiNumber = payload.kanjiNumber
    },
    UKNOWN_NUMBER: (state, payload) => {
      state.hiraganaNumber = payload
      state.katakanaNumber = payload
      state.kanjiNumber = payload
    },
    CLEAR: (state, payload) => {
      state.hiraganaNumber = payload
      state.katakanaNumber = payload
      state.kanjiNumber = payload
    },
    OPEN_MENU: (state, payload) => {
      state.showMenu = payload
    },
    CLOSE_MENU: (state, payload) => {
      state.showMenu = payload
    }
  },
  actions: {
    setNumbers: (context, payload) => {
      context.commit('SET_NUMBERS', payload)
    },
    uknowNumber: (context, payload) => {
      context.commit('UKNOWN_NUMBER', payload)
    },
    clear: (context, payload) => {
      context.commit('CLEAR', payload)
    },
    openMenu: (context, payload) => {
      context.commit('OPEN_MENU', payload)
    },
    closeMenu: (context, payload) => {
      context.commit('CLOSE_MENU', payload)
    }
  }
})
