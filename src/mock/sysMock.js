/**
 * 测试数据
 */

const adminArr = [
    {
        id: 1,
        username:'root',
        roles: ['admin'],
        password:'123456',
        token: 'admin',
        introduction: '我是管理员',
        name: 'Winlin'
    },
    {
        id: 2,
        username:'admin',
        roles: ['admin'],
        password:'123456',
        token: 'editor',
        introduction: '我是管理员',
        name: 'Edwin'
    }
];

Mock.mock(ApiPath.system.getUserinfo, "get", {
    "code": 200,
    "data": {
        "fullName": "@CNAME", // 随机生成中文人名
        "userId": 1000234234001,
        "username": "zhangsan"
    },
    "msg": "success"
});


Mock.mock(ApiPath.system.checkLogin, "post", function (options) {
    let data = $.parseJSON(options.body);
    for(let i in adminArr){
        if(adminArr[i].username == data.admin.username
            && adminArr[i].password == data.admin.password){
            return {
                code:200,
                data:{
                    api_token:'bvfvdv1212dsvndjlwufvsdfdsdsvdvdvsdsd'
                },
                msg:'success'
            }
        }
    }
    return {
        code:500,
        date:'',
        msg:'failed'
    }
});


Mock.mock(ApiPath.system.novice,"get",{
    "code":  200,
    "data":{
        "array|30":  [{
            "ID": '1    ',
            "name": "@CNAME",
            "file_name": '@string()',
            "type": 'upper',
            "file_description":"无"
        }],
    },
    "msg":  "success"
});

Mock.mock(ApiPath.system.advertisement, "get", {
    "code": 200,
    "data": {
        "array|30": [{
            "ID": '1    ',
            "name": "@CNAME",
            "img": '@string()',
            "description": "无",
            "type": 'upper',
        }],
    },
    "msg": "success"
});