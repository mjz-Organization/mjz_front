<template>
   <div>
       <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页管理</el-breadcrumb-item>
            <el-breadcrumb-item>广告管理</el-breadcrumb-item>
            <el-breadcrumb-item>新增广告</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="renovice">返回</el-button>
            </div>
            <div class="content">
                <el-form ref="form" :model="form" label-width="90px" label-position="left">
                <el-form-item label="广告名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item >
                <el-form-item label="广告图片：">
                    <el-upload 
                    action=""
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :on-change="change"
                    :auto-upload="false">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="form.dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item label="使用位置：">
                    <el-select v-model="form.value" placeholder="请选择使用位置">
                     <el-option v-for="item in address"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="广告说明：">
                    <el-input type="textarea" rows="8" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
            name: '',
            desc: '',
            file:[],
            dialogImageUrl: '',
            value:'',
            type:0,
        },
        dialogVisible: false,
         address:[{
            "value":0,
            "label":"学生端",
                    
        },{
            "value":1,
            "label":"客户端",
        }],
      }
    },
    methods: {
        change(file,fileList){
            this.form.dialogImageUrl=file.name;
            if(this.form.dialogImageUrl!=''){
                $(".el-upload--picture-card").hide();
            }
        },
        renovice(){
            this.$router.push(ApiPath.system.advertisement);
        },
        onSubmit() {
            console.log(this.form);
             this.get(ApiPath.system.getUserinfo,{"data":this.form}).then(res => {
                    console.log(res.data);
                });
        },
        handleChange(file, fileList) {
        this.file= fileList.slice(-3);
        console.log(file);
      },
        handleRemove(file, fileList) {
            $(".el-upload--picture-card").show();
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.form.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
    },
    mounted(){
        this.form.type=this.$route.query.type;
    }
  }
</script>

<style scoped>
    .main{
        width: 50%;
        margin-left: 100px;
        margin-top: 2%;
    }
    .head{
        height: 60px;
        border-bottom: 2px solid #dcdfe6;
        margin-bottom: 5%;
    }
    .breadcrumb{
    padding-left: 30px;
    line-height: 54px;
    border-bottom: 2px solid #e7e7e7;
    }
</style>

