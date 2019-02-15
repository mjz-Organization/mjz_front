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
            <el-form-item label="管理员名称:" prop="name" >
                <el-input v-model="form.name" style="width:300px;" placeholder="请输入管理员名称"></el-input>
            </el-form-item>
            <el-form-item label="选择角色：" prop="role_name" >
                <el-select v-model="form.role_id" placeholder="请选择角色">
                    <el-option
                        v-for="item in rolelist"
                        :key="item.id"
                        :label="item.role_name"
                        :value="item.id"
                        >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="管理员电话:" prop="phone" v-if="pagetype">
                <el-input v-model="form.phone" style="width:300px;" placeholder="请输入管理员电话"></el-input>
            </el-form-item>
            <el-form-item label="管理员密码:" prop="password" v-if="pagetype">
                <el-input type="password" v-model="form.password" style="width:300px;" placeholder="请输入管理员密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码:" prop="confirmPassword" v-if="pagetype">
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
        form: {             //表单内数据
            id:"",
            name: '',
            role_id:'',
            role_name:'',
            phone:'',
            password:''
        },
        rolelist:[],
        navtitle:"",        //面包屑导航文本
        addorupdate:true,   //用来判断显示哪个按钮
        pagetype:false,     //用来判断是修改管理员普通信息还是密码
      }
    },
    mounted(){
        let own = this;
        //获取角色列表
        this.get(ApiPath.system.getListRole,{"page":1,"pageSize":10})
        .then(function(res){
            if(res.data.code == 0){
                own.rolelist = res.data.result.data
                console.log(own.rolelist);
            }else if(res.data.code == 2){
                own.$message({
                    essage: '获取角色列表失败',
                    type: 'error'
                });
            }
        })
        .catch(function(err){
            console.log(err);
        });
        //根据路由参数判断是添加还是修改
        this.form.id = this.$route.query.id;
        if(this.form.id==undefined){
            this.addorupdate = true;
            this.pagetype = true;
            this.navtitle = "添加管理员"
        }else{
            //获取当前id的详细信息
            this.get(ApiPath.system.getAdmin,{"userId":own.form.id})
            .then(function(res){
                if(res.data.code == 0){
                    own.form.name = res.data.result.name;
                    own.form.role_id = own.$route.query.role_id;
                    own.form.role_name = own.$route.query.role_name;
                }else if(res.data.code == 2){
                    own.$message({
                        essage: '获取管理员失败',
                        type: 'error'
                    });
                }
            })
            .catch(function(err){
                console.log(err);
            });
            this.addorupdate = false;
            this.navtitle = "修改管理员"
        }
    },
    methods: {
        onSubmit() {
            let own = this;
            console.log(own.form.role_id);
            this.post(ApiPath.system.createAdmin,{
                "name":own.form.ad_name,
                "phone":own.form.phone,
                "role_id":own.form.role_id,
                "password":own.form.password
            }).then(function(res){
                if(res.data.code == 0){
                    own.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                }else{
                    own.$message({
                        type: 'error',
                        message: '添加失败!'
                    });
                }
            })
            .catch(function(err){
                console.log(err);
            });
        },
        resetForm(form) {
            console.log("d");
            this.$refs[form].resetFields();
        },
        updateSubmit(){
            let own = this;
            this.post(ApiPath.system.updateAdmin,{
                "userId":own.form.id,
                "name":own.form.name,
                "role_id":own.form.role_id
            }).then(function(res){
                if(res.data.code == 0){
                    own.$message({
                        type: 'success',
                        message: '更新成功!'
                    });
                }else{
                    own.$message({
                        type: 'error',
                        message: '更新失败!'
                    });
                }
            })
            .catch(function(err){
                console.log(err);
            });
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
