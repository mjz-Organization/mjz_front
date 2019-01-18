import VueRouter from 'vue-router'
import store from "../store/store";
import * as types from '../store/types'
import Vue from 'vue'
Vue.use(VueRouter);

/**
 * 静态路由
 */
import constantRouter from './constantRouter'


// 页面刷新时,重新赋值
if (sessionStorage.getItem('api_token')&&sessionStorage.getItem('roles')) {
    store.commit(types.LOGIN, sessionStorage.getItem('api_token'));
    store.commit(types.ROLES, sessionStorage.getItem('roles'));
}

const router = new VueRouter({
    mode:'history',
    routes:constantRouter
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
