export default[
    {
        path: '/student/login',
        name: 'stuLogin',
        component: resolve => void (require(['../views/student/login.vue'], resolve))
    },
]