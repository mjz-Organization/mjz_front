import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);
const routes = [
    {
      path: '/',
      name: 'index',
      component: resolve => void(require(['../views/pc/login.vue'], resolve))
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => void(require(['../views/pc/login.vue'], resolve))
    },
    {
      path: '/404',
      name: '404',
      component: resolve => void(require(['../views/error404.vue'], resolve))
    }
  ];

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
});

export default router;
