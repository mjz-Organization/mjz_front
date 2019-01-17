exports.install = function (Vue, options) {
    /**
     * 时间戳转换日期
     * @param <int> unixTime    待时间戳(毫秒)
     * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
     * @param <int>  timeZone   时区
     */
    Vue.prototype.unixToDate = function(unixTime, isFull, timeZone) {
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
    }
    //get请求
    Vue.prototype.get = function (url,param={}) {
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
    Vue.prototype.post = function (url,param={}) {
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
    Vue.prototype.LOGINURL = function (url='') {
        if (url == ''||url == null){
            return sessionStorage.getItem("url_login");
        }
        sessionStorage.setItem("url_login", url);
    }
};

