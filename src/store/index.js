import Vue from 'vue';
import Vuex from 'vuex';

const state =  {
    hiraganaNumber: '',
    katakanaNumber: '',
    kanjiNumber: ''
}

const getters = {
    getHiraganaNumber: state => state.hiraganaNumber,
    getKatakanaNumber: state => state.katakanaNumber,
    getKanjiNumber: state => state.kanjiNumber
}

const mutations = {
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
    }
}

const actions =  {
    setNumbers: (context, payload) => {
        context.commit('SET_NUMBERS', payload)
    },
    uknowNumber: (context, payload) => {
        context.commit('UKNOWN_NUMBER', payload)
    },
    clear: (context, payload) => {
        context.commit('CLEAR', payload)
    }
}

Vue.use(Vuex)

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})