export default [
    {
        path: '/customer/login',
        name: 'cusLogin',
        component: resolve => void (require(['../views/customer/login.vue'], resolve))
    },
]