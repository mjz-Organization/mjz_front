import store from "../store/store";
import JSEncrypt from 'jsencrypt/bin/jsencrypt'

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
    GET: function (url,param={}) {
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
    POST: function (url,param={}) {
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
    },
    RSA:function (plaintext) {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----\n' +
            'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDDxo1UPQvLpHLIrHnXPwvPxikd\n' +
            '/RhozdVr5duiYNYo242yLe9439+NNHj9enghCjHdfzqBEMTjkzJSh+aldTgGKcps\n' +
            'yke12zmvw03wEhZwKwTE0v+bKfUck5PhnIYe77tjExogWWg+yxKKDErf8ireSuX7\n' +
            'wOLwn+AVxjYmaQzCZwIDAQAB\n' +
            '-----END PUBLIC KEY-----\n');
        return encrypt.encrypt(plaintext);
    }
};

