export default {
    /**
     * 接口路由
     */
    getUserinfo:'admin/getuserinfo',
    getAdmininfo:'admin/user',
    checkLogin:'admin/login',
    getMenu:'admin/getMenu',                        //获取导航栏菜单
    selectAd:'admin/startPage/selectAd',            //获取广告列表
    deleteAd:'/admin/startPage/deleteAd',           //删除启动页广告
    changeOrderAd:'admin/startPage/changeOrderAd',  //修改启动页顺序
    updateAd:'admin/startPage/updateAd',            //更新广告内容
    createAd:'admin/startPage/createAd',            //新建广告内容
    getAdmins:'mjz_back.cn/admin/userManage/getAdmins',   //获得管理员集合
    getAdmin:'admin/userManage/getAdmin',           //获取单个管理员信息
    updateAdmin:'admin/userManage/updateAdmin',     //更新管理员信息
    createAdmin:'userManage/createAdmin',           //添加管理员
    deleteAdmin:'admin/userManage/deleteAdmin',     //删除管理员
    getListRole:'admin/roleAuth/getRoles',          //角色权限
    deleteRole:'admin/roleAuth/deleteRole',
    getPowerFul:'admin/getMenu',                    //获取所有权限
    getRolePowerful:'admin/roleAuth/getRoleAndAuth',    //获取角色权限
    modifyRole:'admin/roleAuth/updateRole',         //修改角色信息
    addRole:'admin/roleAuth/createRole',            //创建角色
    /**
     * 页面路由
     */
    studentStartPage:'/system/homepage/studentStartPage',           //学生端启动页
    studentStartPageAdd:'/system/homepage/studentStartPage/add',    //学生端添加启动页
    businessStartPage:'/system/homepage/businessStartPage',         //商家端启动页
    businessStartPageAdd:'/system/homepage/businessStartPage/add',  //商家端添加启动页
    adminManage:'/system/homepage/adminManage',                     //用户管理，管理员管理
    adminManageAdd:'/system/homepage/adminManage/add',              //用户管理，添加管理员
    merchantManage:'/system/homepage/merchantManage',               //用户管理，商家管理
    merchantManageDetails:'/system/homepage/merchantManage/details',//用户管理，商家详情
    studentManage:'/system/homepage/studentManage',                 //用户管理，学生管理
    studentManageDetails:'/system/homepage/studentManage/details',  //用户管理，学生详情
    novice:'/system/homepage/novice',
    noviceAdd:'/system/homepage/novice/noviceAdd',
    noviceEdit:'/system/homepage/novice/noviceEdit',
    advertisement:'/system/homepage/advertisement',
    adverAdd:'/system/homepage/advertisement/adverAdd',
    adverEdit:'/system/homepage/advertisement/adverEdit',
    messageTemplate:'/system/homepage/messageTemplate',
    tempAdd:'/system/homepage/messageTemplate/tempAdd',
    tempEdit: '/system/homepage/messageTemplate/tempEdit',
    messageType: '/system/homepage/messageType',
    messageAdd: '/system/homepage/messageType/messageAdd',
    messageEdit:'/system/homepage/messageType/messageEdit',
    jobMessage:'/system/homepage/jobMessage',
    messageLook:'/system/homepage/jobMessage/messageLook',
    jobSalary:'/system/homepage/jobSalary',
    salaryAdd:'/system/homepage/jobSalary/salaryAdd',
    salaryEdit:'/system/homepage/jobSalary/salaryEdit',
    jobType:'/system/homepage/jobType',
    typeAdd:'/system/homepage/jobType/typeAdd',
    typeEdit:'/system/homepage/jobType/typeEdit'
}