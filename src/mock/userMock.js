/**
 * 测试数据
 */
Mock.mock(baseURL+ApiPath.user.userInfo, "get", {
    "code": 200,
    "data": {
        "fullName": "@CNAME", // 随机生成中文人名
        "userId": 1000234234001,
        "username": "zhangsan"
    },
    "msg": "success"
})

Mock.mock(ApiPath.user.table ,"get",{
    "data" :{
    "array|15":[
        {
        "date":"@date",
        "name": "@CNAME",
        "address":" @county(true)"
        }
        ]
    }
})



