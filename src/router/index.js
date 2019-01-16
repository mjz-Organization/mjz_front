import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
const routes = [
    {
        path: '/index',
        name: 'index',
        meta: {
            requireAuth: true,
        },
        component: resolve => void(require(['../views/index.vue'], resolve))
    },
    {
        path: '/student/login',
        name: 'stuLogin',
        component: resolve => void (require(['../views/stu_mobile/login.vue'], resolve))
    },
    {
        path: '/customer/login',
        name: 'cusLogin',
        component: resolve => void (require(['../views/cus_mobile/login.vue'], resolve))
    },
    {
        path: '/sys/login',
        name: 'sysLogin',
        component: resolve => void (require(['../views/sys/login.vue'], resolve))
    },
    {
        path: '/404',
        name: '404',
        component: resolve => void(require(['../views/error404.vue'], resolve))
    }
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
                path: types.LOGINURL,
                query: {redirect: to.fullPath}
            });
        }
    }else {
        next();
    }
});

export default router;
