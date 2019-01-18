import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        [types.USER]: (state, data) => {
            sessionStorage.user = JSON.stringify(data);
            state.user = data;
        },
        [types.LOGOUT]: (state) => {
            sessionStorage.removeItem('user');
            state.user = null;
        },
    }
});
