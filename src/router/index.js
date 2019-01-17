import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
const routes = [{
        path: '/',
        name: 'index',
        component: resolve => void(require(['../views/index.vue'], resolve))
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: resolve => void(require([isMobile() ? '../views/mobile/login.vue' : '../views/pc/login.vue'], resolve))
    // },
    {
        path: '/404',
        name: '404',
        component: resolve => void(require(['../views/error404.vue'], resolve))
    }, {
        path: '/admin/login',
        name: 'adminLogin',
        component: resolve => void(require(['../views/pc/login.vue'], resolve))
    }, {
        path: '/admin/findPassword',
        name: 'findPassword',
        component: resolve => void(require(['../views/pc/findPassword.vue'], resolve))
    },
];

// 页面刷新时,重新赋值api_token
if (window.localStorage.getItem('api_token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('api_token'))
}

const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.api_token) {
            next();
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });
        }
    } else {
        next();
    }
});

function isMobile() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

export default router;