<template>
<div>
    <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>启动页管理</el-breadcrumb-item>
        <el-breadcrumb-item>商家端</el-breadcrumb-item>
        <el-breadcrumb-item>{{ navtitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addstart_title addstart_content">
        <el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button>
    </div>
    <div class="addstart_content">
        <h1 class="font-style">添加商家端启动页</h1>
        <el-form ref="form" :model="form" label-width="15%"  label-position="left">
            <el-form-item label="启动页名称:">
                <el-input v-model="form.ad_name" style="width:300px;"></el-input>
            </el-form-item>
            <el-form-item label="启动页图片:">
                <el-upload 
                    action=""
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-change="change"
                    :file-list="fileList"
                    :auto-upload="false">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="form.dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="图片说明">
                <el-input 
                    type="textarea" 
                    v-model="form.content" 
                    :autosize="{ minRows: 2, maxRows: 6}"
                    >
                </el-input>
            </el-form-item>
            <el-button type="primary" @click="onSubmit" v-if="addorupdate">添加</el-button>
            <el-button type="primary" @click="updateSubmit" v-if="!addorupdate">修改</el-button>
        </el-form>
    </div>
</div>
</template>
<script>
export default {
    data() {
    return {
        form: {
            id:'',
            images_id:'',
            ad_name: '',
            content: '',
            dialogImageUrl:''
        },
        fileList:[],
        param:"",
        addorupdate:true,
        navtitle:"",
        dialogVisible: false,
        myfile:""
      }
    },
    mounted(){
        this.form.id = this.$route.query.id;
        this.form.images_id = this.$route.query.images_id;
        this.form.ad_name = this.$route.query.ad_name;
        this.form.dialogImageUrl = this.$route.query.path;
        this.form.content = this.$route.query.content;
        if(this.form.ad_name==undefined){
            this.addorupdate = true;
            this.navtitle = "新增启动页" 
        }
        else{
            $(".el-upload--picture-card").hide();
            this.fileList.push({url:this.$route.query.path});   
            this.addorupdate = false;
            this.navtitle = "修改启动页" 
        }
    },
    methods: {
        onSubmit() {
            let own = this;
            this.POST(ApiPath.system.createAd,{
                "image":own.myfile,
                "record_type":1,
                "name":own.form.ad_name,
                "content":own.form.content
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
        updateSubmit(){
            let own = this;
            this.POST(ApiPath.system.updateAd,{
                "ad_id":own.form.id,
                "images_id":own.form.images_id,
                "record_type":1,
                "path":own.form.dialogImageUrl,    //搞清楚这个是那个图片路径
                "name":own.form.ad_name,
                "content":own.form.content
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
            this.$router.push({path: ApiPath.system.businessStartPage});
        },
        handleRemove(file, fileList) {
            $(".el-upload--picture-card").show();
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        change(file,fileList){
            this.form.dialogImageUrl=file.name;
            if(this.form.dialogImageUrl!=''){
                $(".el-upload--picture-card").hide();
            }
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
    .font-style{
        color: #00bb00;
        margin: 30px 0;
        font-size: 30px;
    }
    .breadcrumb{
        padding-left: 30px;
        line-height: 54px;
        border-bottom: 2px solid #e7e7e7;
    }
</style>
