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
import NavMenu from '../../components/NavMenu'
  export default {
    props:{
    },
    data () {
      return {
        currentMenu:'',
        isCollapse: false,
        leftMenus:{
            "code":0,                //类型：Number  必有字段  备注：无
    "msg":"success",                //类型：String  必有字段  备注：无
    "childs": [                //类型：Array  必有字段  备注：一级菜单数组
         {                //类型：Object  必有字段  备注：无
            "id":16,                //类型：Number  必有字段  备注：id
            "name":"首页",                //类型：String  必有字段  备注：菜单名
            "pid":0,                //类型：Number  必有字段  备注：父菜单
            "depth":1,                //类型：Number  必有字段  备注：菜单层级 1：一级，2：二级
            "path":"/system/homepage/a",                //类型：String  必有字段  备注：vue路径
            "icon":"el-icon-star-off"                //类型：Mixed  必有字段  备注：图标class
        },
         {                //类型：Object  必有字段  备注：一级菜单
            "id":15,                //类型：Number  必有字段  备注：id
            "name":"信誉管理",                //类型：String  必有字段  备注：菜单名
            "pid":0,                //类型：Number  必有字段  备注：父菜单id
            "depth":1,                //类型：Number  必有字段  备注：菜单层级 1：一级，2：二级
            "path":"#",                //类型：String  必有字段  备注：vue路径
            "icon":"el-icon-message",                //类型：Mixed  必有字段  备注：图标class
            "childs": [                //类型：Array  必有字段  备注：子菜单数组
                 {                //类型：Object  必有字段  备注：子菜单
                    "id":17,                //类型：Number  必有字段  备注：子菜单id
                    "name":"学生信誉",                //类型：String  必有字段  备注：子菜单名称
                    "pid":15,                //类型：Number  必有字段  备注：父菜单id
                    "depth":2,                //类型：Number  必有字段  备注：菜单层级 1：一级，2：二级
                    "path":"/system/homepage/b",                //类型：String  必有字段  备注：vue路径
                    "icon":"el-icon-loading"                //类型：Mixed  必有字段  备注：图标class
                }
            ]
        }
    ]
        }
    }
  },

    mounted(){
        // let self = this;
        this.currentMenu = document.location.pathname;
        this.get(ApiPath.system.getMenu)
        .then(function(res){
            // if(res.data.code == 0)
            //     self.leftMenus = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
    },
    methods: {

    },
    components: {
      'NavMenu': NavMenu
    }
  }
</script>
<style scoped>
  *{
    margin: 0 ;
    padding: 0;
  }
  .el-submenu .el-menu-item{
      min-width: 180px !important;
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
