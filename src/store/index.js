import Vue from 'Vue';
import Vuex from 'vuex';

const state =  {
    hiraganaNumber: '',
    katakanaNumber: '',
    kanjiNumber: ''
}

const getters = {
    getHiraganaNumber: state => state.hiraganaNumber,
    getKatakanaNumber: state => state.katakanaNumber,
    kanjiNumber: state => state.kanjiNumber
}

const mutations = {
    SET_NUMBERS: (state, payload) => {
        state.hiraganaNumber = payload.hiraganaNumber
        state.katakanaNumber = payload.katakanaNumber
        state.kanjiNumber = payload.kanjiNumber
    }
}

const actions =  {
    setNumbers: (context, payload) => {
        context.commit('SET_NUMBERS', payload)
    }
}

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})