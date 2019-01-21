<template>
   <div>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="renovice">返回</el-button>
            </div>
            <div class="content">
                <el-form ref="form" :model="form" label-width="100px" label-position="left">
                <el-form-item label="启动页名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item >
                <el-form-item label="启动页图片：">
                    <el-upload
                    action=""
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :auto-upload="false"
                    >
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="form.dialogImageUrl" alt="">
                    </el-dialog>
                </el-form-item>

                <el-form-item label="使用位置：">
                    <el-select v-model="form.value" placeholder="请选择使用位置">
                    <el-option v-for="item in address"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="启动页说明：">
                    <el-input type="textarea" v-model="form.desc"></el-input>
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
            value:''
        },
        dialogVisible: false,
         address:[{
            "value":0,
            "label":"学生端",
                    
        },{
            "value":1,
            "label":"客户端",
        }
        ],
      }
    },
    methods: {
        renovice(){
            this.$router.push('/system/homepage/advertisement');
        },
        onSubmit() {
             this.get(ApiPath.system.getUserinfo,{"data":this.form}).then(res => {
                    console.log(res.data);
                });
        
        },
        handleChange(file, fileList) {
        this.file= fileList.slice(-3);
      },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
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
    
</style>

