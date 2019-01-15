window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

/**
 * Mock.js is a tool for intercepting Ajax requests to regenerate random data
 * responses in front-end development. It can be used to simulate server responses.
 * The advantages of Mock.js are very simple and convenient, non-intrusive,
 * and basically covers common interface data types.
 */
window.Mock = require('mockjs');

/**
 * 状态码
 */
import * as types from './store/types'
window.types = types;

/**
 * 状态
 */
import store from "./store/store";
window.store = store;

/**
 * ElementUI组件库
 */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

/**
 * vue路由
 */
import router from './router'
window.router = router;

/**
 * api文档路由
 */
import api from './api/apipath'
window.ApiPath = api;

/**
 * 设置mock请求
 */
window.baseURL = "http://doclever.cn:8090/mock/5c39e6ec3dce46264b242206";
process.env.MOCK && require('@/mock');


/**
 * 权限拦截验证
 */
axios.default.timeout = 5000;
axios.defaults.withCredentials=true; //跨域
axios.defaults.baseURL = baseURL;// 设置默认请求的url

axios.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `token ${store.state.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });


axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit(types.LOGOUT);
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' && router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.path },
          });
          break;
        case 404:
          router.replace({path:"/404"});
          break;
      }
    }
    return Promise.reject(error.response.data)
  });



