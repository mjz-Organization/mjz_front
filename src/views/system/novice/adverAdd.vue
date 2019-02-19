<template>
   <div>
       <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页管理</el-breadcrumb-item>
            <el-breadcrumb-item>广告管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{ title }}</el-breadcrumb-item>
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
                    :file-list="fileList"
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
                     <el-button type="primary" v-if="addorupdate"  @click="onSubmit">添加</el-button>
                     <el-button type="primary" v-if="!addorupdate"  @click="updateform">修改</el-button>
                     <el-button type="primary" v-if="addorupdate"  @click="resetForm('form')">重置</el-button>
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
            id:'',
            name: '',
            desc: '',
            images_id:'',
            dialogImageUrl: '',
            value:'',
        },
        image:"",
        fileList:[],
        addorupdate:true,
        dialogVisible: false,
        title:"",
         address:[{
            "value":0,
            "label":"学生端",
                    
        },{
            "value":1,
            "label":"商家端",
        }],
      }
    },
    methods: {
        change(file,fileList){
            this.form.dialogImageUrl=file.name;
            this.image=file;
            if(this.form.dialogImageUrl!=''){
                $(".el-upload--picture-card").hide();
            }
        },
        renovice(){
            this.$router.push(ApiPath.system.advertisement);
        },
        onSubmit() {
                if(this.form.name==''||this.form.dialogImageUrl==''||this.form.value==''||this.form.desc==''){
                    this.$message({
                        type:'error',
                        message:"必填项不能为空！"
                    })
                }else{
                     var datas = {
                        "image":this.image,
                        "record_type":this.form.value,
                        "name":$.trim(this.form.name),
                        "content":$.trim(this.form.desc)
                    }
                    let _this=this;
                    this.POST(ApiPath.system.createIndexAd,datas).then(res => {
                        if(res.data.code==0){
                            _this.$message({
                                type:'success',
                                message:"添加成功！"
                            });
                            _this.resetForm(_this.form);

                        }else if(res.data.code==2){
                            _this.$message({
                                type:'error',
                                message:"添加失败！"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        },
        updateform(){
            // console.log(this.form.desc);
            if(this.form.name==''||this.form.dialogImageUrl==''||this.form.desc==''){
                    this.$message({
                        type:'error',
                        message:"必填项不能为空！"
                    })
                }else{
                     var datas = {
                        "ad_id":this.form.id,
                        "images_id":this.form.images_id,
                        "record_type":this.form.value,
                        "image":this.image,
                        "path":this.form.dialogImageUrl,
                        "name":this.form.name,
                        "content":this.form.desc
                    }
                    let _this=this;
                    this.POST(ApiPath.system.createIndexAd,datas).then(res => {
                        if(res.data.code==0){
                            _this.$message({
                                type:'success',
                                message:"修改成功！"
                            });
                            _this.resetForm(_this.form);

                        }else if(res.data.code==2){
                            _this.$message({
                                type:'error',
                                message:"修改失败！"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }

        },
        resetForm(form) {
            console.log("d");
            this.$refs[form].resetFields();
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
        // this.form.type=this.$route.query.type;
        var index = this.$route.query.index;
        if(index==undefined){
            this.title="新增广告";
        }else{
            var forms = this.$route.query.row;
            this.title="编辑广告";
            this.addorupdate=false;
            $(".el-upload--picture-card").hide();
            this.form.id=forms.id;
            this.form.name=forms.ad_name;
            this.form.desc=forms.content;
            this.form.images_id=forms.images_id;
            this.form.dialogImageUrl=forms.path;
            this.form.value=forms.record_type;
            this.fileList.push({url:this.$route.query.row.path});
        }



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

