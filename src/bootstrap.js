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
 * api文档路由
 */
import api from './api/apipath'
window.ApiPath = api

/**
 * 设置mockq请求
 */
window.baseURL = "http://mjz.test";
process.env.MOCK && require('@/mock')
axios.defaults.withCredentials=true; //跨域
axios.defaults.baseURL = baseURL // 设置默认请求的url


window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    window.location.href = "/login";
            }
        }
        return Promise.reject(error.response.data)
    });
