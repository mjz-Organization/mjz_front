<<<<<<< HEAD
export default [{
=======
export default [
    {
>>>>>>> a6952fe06239d1375cb3f419681fd42077561ba2
        path: '/system/index',
        name: 'index',
        meta: {
            roles:['admin','user'],
            requireAuth: true,
        },
        component: resolve => void(require(['../views/system/index.vue'], resolve))
    },
    {
        path: '/system/homepage',
        name: 'homePage',
        meta: {
            roles:['admin'],
            requireAuth: true,
        },
<<<<<<< HEAD
        component: resolve => void(require(['../views/system/homePage.vue'], resolve))

    }
]
=======
        component: resolve => void(require(['../views/system/homePage.vue'], resolve)),
        children:[
            {
                path: 'a',
                name: 'index',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/test.vue'], resolve))
            },
            {
                path: 'b',
                name: 'index',
                meta: {
                    requireAuth: true,
                },
                component: resolve => void(require(['../views/system/test2.vue'], resolve))     
            }
        ]
  
    }
]
>>>>>>> a6952fe06239d1375cb3f419681fd42077561ba2
