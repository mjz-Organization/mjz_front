<template>
    <div id="app">
<el-container >

 <el-aside width="200px" style="background-color: #fff">
   <div>
     <img src="../../images/admin/mjz_logo.png" alt="觅兼职logo" class="menu_img">
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
          <NavMenu :navMenus="leftMenus.result"></NavMenu>
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
        leftMenus:{}
    }
  },

    mounted(){
        let self = this;
        this.currentMenu = document.location.pathname;
        this.get(ApiPath.system.getMenu)
        .then(function(res){
            if(res.data.code == 0)
                self.leftMenus = res.data;
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

    .menu_img{
        width: 200px;
        margin-top: 15px;
    }
</style>
