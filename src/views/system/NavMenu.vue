<template>
  <div class="navMenu">

    <label v-for="(navMenu,key) in navMenus" :key="key">
      <el-menu-item v-if="navMenu.childs==null"
                    :key="navMenu.id" :data="navMenu" :index="navMenu.path" :route="navMenu.path" :default-active="$route.path">
        <i :class="navMenu.icon"></i>
        <span slot="title" class="item_title" >{{navMenu.name}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.childs"
                  :key="navMenu.id" :data="navMenu" :index="navMenu.name">
        <template slot="title">
          <i :class="navMenu.icon"></i>
          <span class="item_title"> {{navMenu.name}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </label>
        <!-- <label v-for="(navMenu,key) in navMenus" :key="key">
      <el-menu-item v-if="navMenu.childs==null&&navMenu.entity"
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.value" :route="navMenu.entity.value" :default-active="$route.path">
        <i :class="navMenu.entity.icon"></i>
        <span slot="title" class="item_title" >{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <el-submenu v-if="navMenu.childs&&navMenu.entity"
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span class="item_title"> {{navMenu.entity.alias}}</span>
        </template>
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </label> -->

  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus'],
    data() {
      return {
          isActive:false
      }
    },
    mounted(){

        // console.log(this.navMenus)
    },
    methods: {
    }
  }
</script>

<style scoped>
  .navMenu{
    width: 100%;
    height: 100%;
    /* background: #00142a !important; */
  }
 .item_title{
   color:#000 ;
   background-color: #fff !important
 }


</style>
<style>

.el-submenu .el-submenu__title{
    background-color: #fff !important;
    color:#eee !important;
  text-align: left !important;

  }
.el-menu-item{
  color:#409EFF !important;
  background-color: #fff !important;
}

.is-active{
    color:#409EFF !important;
}
</style>