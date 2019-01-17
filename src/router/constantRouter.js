export default [
    {
        path: '/system/login',
        name: 'sysLogin',
        component: resolve => void (require(['../views/system/login.vue'], resolve))
    },
    {
        path: '/student/login',
        name: 'stuLogin',
        component: resolve => void (require(['../views/student/login.vue'], resolve))
    },
    {
        path: '/customer/login',
        name: 'cusLogin',
        component: resolve => void (require(['../views/customer/login.vue'], resolve))
    },
    {
        path: '/404',
        name: '404',
        component: resolve => void(require(['../views/error404.vue'], resolve))
    },
]