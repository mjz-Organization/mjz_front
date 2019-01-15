import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        api_token: null,
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.api_token = data;
            state.api_token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('api_token');
            state.api_token = null
        },
    }
});
