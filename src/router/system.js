export default [{
        path: '/system/index',
        name: 'index',
        meta: {
            roles: ['admin', 'user'],
            requireAuth: true,
        },
        component: resolve => void(require(['../views/system/index.vue'], resolve))
    },
    {
        path: '/system/homepage',
        name: 'homePage',
        meta: {
            roles: ['admin'],
            requireAuth: true,
        },
        component: resolve => void(require(['../views/system/homePage.vue'], resolve)),
        children: [{
                path: 'startpage',
                name: 'startpage',
                meta: {
                    requireAuth: true,
                },
            component: resolve => void (require(['../views/system/startPage.vue'], resolve))
            },
            {
                path: 'startpage/add',
                name: 'index',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/addStartPage.vue'], resolve))

            },
            {
                path: 'novice',
                name: 'novice',
                meta:{
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/novice.vue'], resolve))

            },
            {
                path: 'noviceEdit',
                name: 'noviceEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/noviceEdit.vue'], resolve))
            }
        ]

    }
]