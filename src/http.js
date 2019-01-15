

axios.default.timeout = 5000;
axios.defaults.withCredentials=true; //跨域
axios.defaults.baseURL = baseURL // 设置默认请求的url

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

export default axios
