import VueRouter from 'vue-router'
import store from "../store/store";
import * as types from '../store/types'
import Vue from 'vue'
Vue.use(VueRouter);

import system from './system'
import student from './student'
import customer from './customer'

/**
 * 公共路由
 * @type {{path: string, component: (function(*=): *), name: string}[]}
 */
const publics = [
    {
      path: '/404',
      name: '404',
      component: resolve => void(require(['../views/error404.vue'], resolve))
    },
];

// 页面刷新时,重新赋值api_token
if (window.localStorage.getItem('api_token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('api_token'))
}

let routes = new Set([...system, ...student, ...customer, ...publics]);

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.api_token) {
            next();
        } else {
            next({
                path: getLoginurl(),
                query: {redirect: to.fullPath}
            });
        }
    }else {
        next();
    }
});

function getLoginurl() {
    let url = sessionStorage.getItem('url_login');
    if (url == '' || url == null){
        url = '/404';
    }
    return url;
}

export default router;
