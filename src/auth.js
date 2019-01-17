import axios from 'axios'
import store from "./store/store";
import * as types from "./store/types";
import router from "./router";

/**
 * 权限拦截验证
 */
var instance = axios.create({ timeout: 1000 * 12});
instance.defaults.withCredentials=true; //跨域
instance.defaults.baseURL = 'http://doclever.cn:8090/mock/5c3d98703dce46264b246eb3/api';// 设置默认请求url

instance.interceptors.request.use(
    config => {
        if (store.state.api_token) { // 判断是否存在api_token,如果存在的话,则每个http_header都加上api_token
            config.headers.Authorization = `api_token ${store.state.api_token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });


instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit(types.LOGOUT);
                    // 只有在当前路由不是登录页面才跳转
                    router.currentRoute.path !== this.LOGINURL() && router.replace({
                        path: this.LOGINURL(),
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

export default instance;