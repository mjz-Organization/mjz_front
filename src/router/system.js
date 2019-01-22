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
        children: [
            /**
             * 启动页管理
             */
            {
                path: 'startpage',
                name: 'startpage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/startPage/startPage.vue'], resolve))
            },
            {
                path: 'startpage/add',
                name: 'index',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/startPage/addStartPage.vue'], resolve))

            },
            /**
             * 首页管理
             */
            {
                path: 'novice',
                name: 'novice',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/novice/novice.vue'], resolve)),
            },
            {
                path: 'novice/noviceAdd',
                name: 'novice/noviceAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/novice/noviceAdd.vue'], resolve))

            },
            {
                path: 'novice/noviceEdit',
                name: 'novice/noviceEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/novice/noviceEdit.vue'], resolve))
            },
            {
                path: 'advertisement',
                name: 'advertisement',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/novice/advertisement.vue'], resolve))
            },
            {
                path: 'advertisement/adverAdd',
                name: 'adverAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/novice/adverAdd.vue'], resolve))
            },
            {
                path: 'advertisement/adverEdit',
                name: 'adverEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/novice/adverEdit.vue'], resolve))
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
                component: resolve => void (require(['../views/system/job/jobSalary.vue'], resolve))
            },
            {
                path: 'jobSalary/salaryAdd',
                name: 'salaryAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/salaryAdd.vue'], resolve))
            },
            {
                path: 'jobSalary/salaryEdit',
                name: 'salaryEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/salaryEdit.vue'], resolve))
            },
            {
                path: 'jobType',
                name: 'jobType',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/jobType.vue'], resolve))
            },
            {
                path: 'jobType/typeAdd',
                name: 'typeAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/typeAdd.vue'], resolve))
            },
            {
                path: 'jobType/typeEdit',
                name: 'typeEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/typeEdit.vue'], resolve))
            },
            {
                path: 'jobMessage',
                name: 'jobMessage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/jobMessage.vue'], resolve))
            },
            {
                path: 'jobMessage/messageLook',
                name: 'messageLook',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/job/messageLook.vue'], resolve))
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
                component: resolve => void (require(['../views/system/message/messageTemplate.vue'], resolve))
            },
            {
                path: 'messageTemplate/tempAdd',
                name: 'tempAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/message/tempAdd.vue'], resolve))
            },
            {
                path: 'messageTemplate/tempEdit',
                name: 'tempEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/message/tempEdit.vue'], resolve))
            },
            {
                path: 'messageType',
                name: 'messageType',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/message/messageType.vue'], resolve))
            },
            {
                path: 'messageType/messageAdd',
                name: 'messageAdd',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/message/messageAdd.vue'], resolve))
            },
            {
                path: 'messageType/messageEdit',
                name: 'messageEdit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/message/messageEdit.vue'], resolve))
            },
            /**
             * 用户管理
             */
            {
                path: 'merchantManage',
                name: 'merchantManage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/merchantManage.vue'], resolve))
            },
            {
                path: 'merchantManage/details',
                name: 'merchantManage/details',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/merchantManageDetails.vue'], resolve))
            },
            {
                path: 'studentManage',
                name: 'studentManage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/studentManage.vue'], resolve))
            },
            {
                path: 'adminManage',
                name: 'adminManage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/adminManage.vue'], resolve))
            },
            /**
             * 投诉管理
             * */
            {
                path: 'complaintInform',
                name: 'complaintInform',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/information.vue'], resolve))
            },
            {
                path: 'detailed',
                name: 'detailed',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/detailed.vue'], resolve))
            },

        ]

    }
]