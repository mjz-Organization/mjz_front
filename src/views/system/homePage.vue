<template>
    <div id="app">
<el-container >

 <el-aside width="200px" style="background-color: #fff">
   <div style="height: 70px;">
     <img src="" alt="">
   </div>
        <el-menu
          :default-active="currentMenu"
          class="el-menu-vertical-demo"
          background-color="#F0F6F6"
          text-color="#3C3F41"
          active-text-color="black"
          :collapse="isCollapse"
          router
        >
          <!--加上router 才能实现跳转-->
          <NavMenu :navMenus="leftMenus.childs"></NavMenu>
        </el-menu>
    <!-- </el-menu> -->
  </el-aside>
  <el-container>
  <el-header class="header_css">
    <el-button icon="el-icon-share" style="margin: 10px;float:right;"></el-button>
</el-header>
    <el-main class="count_css">
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</div>

</template>

<script>
import NavMenu from './NavMenu'
  export default {
    props:{
    },
    data () {
      return {
        currentMenu:'',
        isCollapse: false,
        leftMenus: {
                   "entity": null,
                   "childs": [
                     {
                       "entity": {
                         "id": 1,
                         "parentMenuId": 0,
                         "name": "systemManage",
                         "icon": "el-icon-message\r\n",
                         "alias": "系统管理",
                         "value": null
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 3,
                             "parentMenuId": 1,
                             "name": "authManage",
                             "icon": "el-icon-loading",
                             "alias": "权限管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 4,
                             "parentMenuId": 1,
                             "name": "roleManage",
                             "icon": "el-icon-bell",
                             "alias": "角色管理",
                             "value": "/system/homepage/a"
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 2,
                             "parentMenuId": 1,
                             "name": "menuManage",
                             "icon": "el-icon-edit",
                             "alias": "菜单管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 5,
                             "parentMenuId": 1,
                             "name": "groupManage",
                             "icon": "el-icon-mobile-phone\r\n",
                             "alias": "分组管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         }
                       ]
                     },
                     {
                       "entity": {
                         "id": 6,
                         "parentMenuId": 0,
                         "name": "userManage",
                         "icon": "el-icon-news",
                         "alias": "用户管理",
                         "value": null
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 7,
                             "parentMenuId": 6,
                             "name": "accountManage",
                             "icon": "el-icon-phone-outline\r\n",
                             "alias": "帐号管理",
                             "value": ""
                           },
                           "childs": [
                             {
                               "entity": {
                                 "id": 14,
                                 "parentMenuId": 7,
                                 "name": "emailManage",
                                 "icon": "el-icon-sold-out\r\n",
                                 "alias": "邮箱管理",
                                 "value": "/system/homepage/b"
                               },
                               "childs": null
                             },
                             {
                               "entity": {
                                 "id": 13,
                                 "parentMenuId": 7,
                                 "name": "passManage",
                                 "icon": "el-icon-service\r\n",
                                 "alias": "密码管理",
                                 "value": "/system/homepage"
                               },
                               "childs": null
                             }
                           ]
                         },
                         {
                           "entity": {
                             "id": 8,
                             "parentMenuId": 6,
                             "name": "integralManage",
                             "icon": "el-icon-picture",
                             "alias": "积分管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         }
                       ]
                     },
                     {
                       "entity": {
                         "id": 9,
                         "parentMenuId": 0,
                         "name": "contentManage",
                         "icon": "el-icon-rank",
                         "alias": "内容管理",
                         "value": null
                       },
                       "childs": [
                         {
                           "entity": {
                             "id": 10,
                             "parentMenuId": 9,
                             "name": "classifyManage",
                             "icon": "el-icon-printer",
                             "alias": "分类管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 11,
                             "parentMenuId": 9,
                             "name": "articleManage",
                             "icon": "el-icon-star-on",
                             "alias": "文章管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         },
                         {
                           "entity": {
                             "id": 12,
                             "parentMenuId": 9,
                             "name": "commentManage",
                             "icon": "el-icon-share",
                             "alias": "评论管理",
                             "value": "/system/homepage"
                           },
                           "childs": null
                         }
                       ]
                     }
                   ]
                 }

    }
  },

    mounted(){
        let currentUrl = window.location.href;
        this.currentMenu = currentUrl.split('/#')[1];  
        // this.get(ApiPath.system.getMenu)
        // .then(function(res){
        //   console.log(res);
        // })
        // .catch(function(err){
        //   console.log(err);
        // });
    },
    methods: {

    },
    components: {
      'NavMenu': NavMenu
    }
  }
</script>
<style>
  *{
    margin: 0 ;
    padding: 0;
  }

  .el-submenu .el-menu-item{
      min-width: 180px;
  }

.header_css{
  width: 100%;
	height: 97px;
	background-image: linear-gradient(90deg,#3fcad6 0%,#5396e1 100%), 
	linear-gradient(#0ac4f4,#0ac4f4);
	background-blend-mode: normal,normal;
}

.count_css{
/* width: 1632px;*/
	/* height: 100%;  */
	background-image: linear-gradient(180deg, 
		#f2f8f9 0%, 
		#eaf7fa 71%, 
		#e1f6fa 100%), 
	linear-gradient(
		#f2f8f9, 
		#f2f8f9);
	background-blend-mode: normal, 
		normal;
}
</style>

