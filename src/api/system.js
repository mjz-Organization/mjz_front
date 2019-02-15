export default {
    /**
     * 接口路由
     */
    getUserinfo:'admin/getuserinfo',
    getAdmininfo:'admin/user',
    checkLogin:'admin/login',
    getMenu:'admin/getMenu',
    selectAd:'admin/startPage/selectAd',
    deleteAd:'admin/startPage/deleteAd',
    changeOrderAd:'admin/startPage/changeOrderAd',
    updateAd:'admin/startPage/updateAd',
    createAd:'admin/startPage/createAd',
    //角色权限
    getListRole:'admin/roleAuth/getRoles',
    deleteRole:'admin/roleAuth/deleteRole',
    //获取所有权限
    getPowerFul:'admin/getMenu',
    //获取角色权限
    getRolePowerful:'admin/roleAuth/getRoleAndAuth',
    //修改角色信息
    modifyRole:'admin/roleAuth/updateRole',
    //创建角色
    addRole:'admin/roleAuth/createRole',
    /**
     * 页面路由
     */
    studentStartPage:'/system/homepage/studentStartPage',
    studentStartPageAdd:'/system/homepage/studentStartPage/add',
    businessStartPage:'/system/homepage/businessStartPage',
    businessStartPageAdd:'/system/homepage/businessStartPage/add',
    adminManage:'/system/homepage/adminManage',
    adminManageAdd:'/system/homepage/adminManage/add',
    merchantManage:'/system/homepage/merchantManage',
    merchantManageDetails:'/system/homepage/merchantManage/details',
    studentManage:'/system/homepage/studentManage',
    studentManageDetails:'/system/homepage/studentManage/details',
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