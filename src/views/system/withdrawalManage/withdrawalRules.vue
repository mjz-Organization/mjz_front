<template>
<div>
    <el-breadcrumb separator="/" class="breadcrumb">
		<el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
		<el-breadcrumb-item>提现管理</el-breadcrumb-item>
		<el-breadcrumb-item>提现规则设置</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addstart_content">
        <div class="addstart_title">
            <!-- <el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button> -->
            <h1 class="font-style">提现规则设置</h1>
        </div>
        <el-form ref="form" :model="form" label-width="15%"  label-position="left">
            <el-form-item label="提现时间设置:">
                每月
                <el-input-number v-model="form.num1" controls-position="right" :min="1" :max="28"></el-input-number>
                号
            </el-form-item>
            <el-form-item label="提现折扣设置:">
                <el-input v-model="form.num2" style="width:50px;"></el-input> %
            </el-form-item>
            <el-form-item label="觅币折扣设置:">
                <el-input v-model="form.num3" style="width:50px;"></el-input> 
                元 =  
                <el-input v-model="form.num4" style="width:50px;"></el-input> 
                觅币
            </el-form-item>
            <el-button type="primary" @click="onSubmit">确定修改</el-button>
        </el-form>
    </div>
</div>
</template>
<script>
export default {
    data() {
    return {
        form:{
            num1:25,
            num2:10,
            num3:1,
            num4:1,
        }
      }
    },
    mounted(){

    },
    methods: {
      onSubmit() {
        console.log('add!');
      },

      backPage(){
        //   this.$router.push({path: ApiPath.system.startPage});
      }
      
    }
  }
</script>

<style scoped>
    .addstart_content{
        margin: 20px 100px 0 50px;
        width: 70%;
    }
    .addstart_title{
        margin-bottom:50px;
        border-bottom: 2px solid #aaa;
    }
    .font-style{
        color: #00bb00;
        margin: 50px 0;
        font-size: 30px;
    }
    .breadcrumb{
        padding-left: 30px;
        line-height: 54px;
        border-bottom: 2px solid #e7e7e7;
    }
</style>
