import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        api_token: null,
        roles: null,
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            sessionStorage.api_token = data;
            state.api_token = data;
        },
        [types.ROLES]: (state, data) => {
            sessionStorage.roles = data;
            state.roles = data;
        },
        [types.LOGOUT]: (state) => {
            sessionStorage.removeItem('api_token');
            state.api_token = null;
            sessionStorage.removeItem('roles');
            state.roles = null;
        },
    }
});
