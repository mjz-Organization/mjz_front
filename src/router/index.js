import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        name: 'Login',
        component: resolve => void(require(['../components/Login.vue'], resolve))
    }, {
        path: '/adminLogin',
        name: 'adminLogin',
        component: resolve => void(require(['../adminLogin.vue'], resolve))
    }]
})