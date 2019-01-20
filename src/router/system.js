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
                path: 'a',
                name: 'index',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/studentStartPage.vue'], resolve))
            },
            /**
             * 首页管理
             */
            {
                path: 'novice',
                name: 'novice',
                meta:{
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/novice.vue'], resolve))

            },
            {
              path: 'noviceAdd',
              name: 'noviceAdd',
              meta: {
                requireAuth: true,
              },
              component: resolve => void(require(['../views/system/noviceAdd.vue'], resolve))

            },
            {
                path: 'noviceEdit',
                name: 'noviceEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/noviceEdit.vue'], resolve))
            },
            {
                path: 'advertisement',
                name: 'advertisement',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/advertisement.vue'], resolve))
            },
            {
                path: 'adverAdd',
                name: 'adverAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/adverAdd.vue'], resolve))
            },
            {
                path: 'adverEdit',
                name: 'adverEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/adverEdit.vue'], resolve))
            },
            /**
             * 兼职管理
             */
            {
                path: 'jobSalary',
                name: 'jobSalary',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jobSalary.vue'], resolve))
            },
            {
                path: 'salaryAdd',
                name: 'salaryAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/salaryAdd.vue'], resolve))
            },
            {
                path: 'salaryEdit',
                name: 'salaryEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/salaryEdit.vue'], resolve))
            },
            {
                path: 'jobType',
                name: 'jobType',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jobType.vue'], resolve))
            },
            {
                path: 'typeAdd',
                name: 'typeAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/typeAdd.vue'], resolve))
            },
            {
                path: 'typeEdit',
                name: 'typeEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/typeEdit.vue'], resolve))
            },
            {
                path: 'jobMessage',
                name: 'jobMessage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jobMessage.vue'], resolve))
            },
            {
                path: 'messageLook',
                name: 'messageLook',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/messageLook.vue'], resolve))
            },
            /**
             * 消息模板
             */
            {
                path: 'messageTemplate',
                name: 'messageTemplate',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/messageTemplate.vue'], resolve))
            },
            {
                path: 'tempAdd',
                name: 'tempAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/tempAdd.vue'], resolve))
            },
            {
                path: 'tempEdit',
                name: 'tempEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/tempEdit.vue'], resolve))
            },
            {
                path: 'messageType',
                name: 'messageType',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/messageType.vue'], resolve))
            },
            {
                path: 'messageAdd',
                name: 'messageAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/messageAdd.vue'], resolve))
            },
            {
                path: 'messageEdit',
                name: 'messageEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/messageEdit.vue'], resolve))
            },



        ]

    }
]