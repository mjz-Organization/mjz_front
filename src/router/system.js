export default [{
        path: '/system/index',
        name: 'index',
        meta: {
            requireAuth: true,
        },
        component: resolve => void(require(['../views/system/index.vue'], resolve))
    },
    {
        path: '/system/homepage',
        name: 'homePage',
        meta: {
            requireAuth: true,
        },
        component: resolve => void(require(['../views/system/homePage.vue'], resolve))

    }
]