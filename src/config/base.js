import store from "../store/store";

export default {
    /**
     * 时间戳转换日期
     * @param <int> unixTime    待时间戳(毫秒)
     * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
     * @param <int>  timeZone   时区
     */
    unixToDate:function (unixTime, isFull, timeZone) {
        if (typeof (timeZone) == 'number'){
            unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
        }
        var time = new Date(unixTime);
        var ymdhis = "";
        ymdhis += time.getUTCFullYear() + "-";
        ymdhis += getzf((time.getUTCMonth()+1)) + "-";
        ymdhis += getzf(time.getUTCDate());
        if (isFull === true){
            ymdhis += " " + getzf(time.getUTCHours()) + ":";
            ymdhis += getzf(time.getUTCMinutes()) + ":";
            ymdhis += getzf(time.getUTCSeconds());
        }
        return ymdhis;
    },
    //get请求
    get: function (url,param={}) {
        if(store.state.user){
            param['api_token'] = store.state.user.api_token;
        }
        return new Promise((resolve,reject) => {
            axios({
                method: 'get',
                url,
                params: param,
            }).then(res => {
                resolve(res)
            })
        })
    },
    //post请求
    post: function (url,param={}) {
        if(store.state.user){
            param['api_token'] = store.state.user.api_token;
        }
        return new Promise((resolve,reject) => {
            axios({
                method: 'post',
                url,
                data: param,
                headers: {
                    "Content-Type":"application/json;charset=utf-8"
                }
            }).then(res => {
                resolve(res)
            })
        })
    },
    LOGINURL: function (url='') {
        if (url == ''||url == null){
            return sessionStorage.getItem("url_login");
        }
        sessionStorage.setItem("url_login", url);
    },
    addRouter: function () {
        let dR = new Array();
        for (let i=0;i<dynamicRouter.length;i++){
            for (let j=0;j<dynamicRouter[i].meta.roles.length;j++){
                if (dynamicRouter[i].meta.roles[j] == store.state.user.roles){
                    dR.push(dynamicRouter[i]);
                }
            }
        }
        router.addRoutes(dR.concat([{
            path: '*',
            redirect: '/404'
        }]));
    }
};

