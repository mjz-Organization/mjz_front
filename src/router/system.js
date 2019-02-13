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
                path: 'studentStartPage',
                name: 'studentStartPage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/startPage/studentStartPage.vue'], resolve))
            },
            {
                path: 'studentStartPage/add',
                name: 'studentStartPage/add',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/startPage/studentStartPageAdd.vue'], resolve))

            },
            {
                path: 'businessStartPage',
                name: 'businessStartPage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/startPage/businessStartPage.vue'], resolve))
            },
            {
                path: 'businessStartPage/add',
                name: 'businessStartPage/add',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/startPage/businessStartPageAdd.vue'], resolve))

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
                path: 'studentManage/details',
                name: 'studentManage/details',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/studentManageDetails.vue'], resolve))
            },
            {
                path: 'adminManage',
                name: 'adminManage',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/adminManage.vue'], resolve))
            },
            {
                path: 'adminManage/add',
                name: 'adminManage/add',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/userManage/adminManageAdd.vue'], resolve))
            },
            /**
             *
             * 投诉管理 信息管理
             * */
            {
                path: 'complaintInform',
                name: 'complaintInform',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/information.vue'], resolve))
            },
            /**
             * 详情
             * */
            {
                path: 'complaintInform/detailed',
                name: 'detailed',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/detailed.vue'], resolve))
            },
            /**
<<<<<<< HEAD
             *
             * 投诉管理 类型管理
             * */
            {
                path: 'manager',
                name: 'manager',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/manager.vue'], resolve))
            },
            {
                path: 'manager/detail',
                name: 'managerDetailed',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/complaint/managerDetailed.vue'], resolve))
            },
            /**
             *
             * 角色权限管理
             * */
            {
                path: 'roleManager',
                name: 'roleManager',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jurisdiction/roleManager.vue'], resolve))
            },
            {
                path: 'roleManager/addRole',
                name: 'addRole',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jurisdiction/addRole.vue'], resolve))
            },
            {
                path: 'rightPower',
                name: 'rightPower',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jurisdiction/rightPower.vue'], resolve))
            },
            {
                path: 'rightPower/addRight',
                name: 'addRight',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/jurisdiction/addRight.vue'], resolve))
            },
            /**
             * 提现管理
             */
            {
                path: 'withdrawalAudit',
                name: 'withdrawalAudit',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/withdrawalManage/withdrawalAudit.vue'], resolve))
            }, 
            {
                path: 'withdrawalRules',
                name: 'withdrawalRules',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void (require(['../views/system/withdrawalManage/withdrawalRules.vue'], resolve))
            },
        ]

    }
]