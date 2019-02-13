<template>
<div>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{ navtitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addstart_title addstart_content">
        <el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button>
    </div>

    <div class="addstart_content">
        <el-form ref="form" :model="form" label-width="15%"  label-position="left">
            <el-form-item label="管理员名称:" prop="name">
                <el-input v-model="form.name" style="width:300px;" placeholder="请输入管理员名称"></el-input>
            </el-form-item>
            <el-form-item label="选择角色：" prop="role">
                <el-select v-model="form.role" placeholder="请选择角色">
                    <el-option label="普通管理员" value="普通管理员"></el-option>
                    <el-option label="系统管理员" value="系统管理员"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="管理员账号:" prop="accountNumber">
                <el-input v-model="form.accountNumber" style="width:300px;" placeholder="请输入管理员账号"></el-input>
            </el-form-item>
            <el-form-item label="管理员密码:" prop="password">
                <el-input type="password" v-model="form.password" style="width:300px;" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="confirmPassword">
                <el-input type="password" v-model="form.confirmPassword" style="width:300px;" placeholder="请输入确认密码"></el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" v-if="addorupdate" style="margin-left:80px;">添加</el-button>
            <el-button type="primary" @click="updateSubmit" v-if="!addorupdate" style="margin-left:80px;">修改</el-button>
            <el-button type="primary" @click="resetForm('form')" style="margin-left:80px;">重置</el-button>
        </el-form>
    </div>
</div>
</template>
<script>
export default {
    data() {
    return {
        form: {
            name: '',
            role:'',
            accountNumber: '',
            password: '',
            confirmPassword: '',
        },
        param:"",
        navtitle:"",
        addorupdate:true
      }
    },
    mounted(){
        this.form.name = this.$route.query.name;
        this.form.role = this.$route.query.role;
        this.form.accountNumber = this.$route.query.accountNumber;
        this.form.password = this.$route.query.password;
        this.form.confirmPassword = this.$route.query.password;
        if(this.form.name==undefined){
            this.addorupdate = true;
            this.navtitle = "添加管理员"
        }else{
            this.addorupdate = false;
            this.navtitle = "修改管理员"
        }
    },
    methods: {
      onSubmit() {
        console.log('add!');

        // let config = {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // };
        // this.$reqs.post("/upload", this.param, config)
        // .then(function(result) {
        //     console.log(result);
        // })
      },
      resetForm(form) {
          console.log("d");
        this.$refs[form].resetFields();
      },
      updateSubmit(){
        console.log('update!');
      },
      backPage(){
          this.$router.push({path: ApiPath.system.adminManage});
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
        margin-bottom:20px; 
        padding-bottom: 20px;
        border-bottom: 2px solid #aaa;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
     .avatar {
        width: 178px;
        height: 178px;
        display: block;
     }

    .breadcrumb{
        padding-left: 30px;
        line-height: 54px;
        border-bottom: 2px solid #e7e7e7;
    }
</style>
