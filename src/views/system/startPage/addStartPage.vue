<template>
<div class="addstart_content">
    <div class="addstart_title">
        <el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="15%"  label-position="left">
        <el-form-item label="启动页名称:">
            <el-input v-model="form.name" style="width:300px;"></el-input>
        </el-form-item>
        <el-form-item label="启动页图片:">

        </el-form-item>
        <el-form-item label="选择使用位置">
            <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="学生端" value="学生端"></el-option>
                <el-option label="商家端" value="商家端"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="启动页说明">
            <el-input 
                type="textarea" 
                v-model="form.desc" 
                :autosize="{ minRows: 2, maxRows: 6}"
                >
            </el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit" v-if="addorupdate">添加</el-button>
        <el-button type="primary" @click="updateSubmit" v-if="!addorupdate">修改</el-button>
    </el-form>
</div>
</template>
<script>
export default {
    data() {
    return {
        form: {
            name: '',
            img:'',
            region: '',
            desc: '',
        },
        param:"",
        addorupdate:true
      }
    },
    mounted(){
        this.form.name = this.$route.query.name;
        this.form.region = this.$route.query.types;
        this.form.desc = this.$route.query.Remarks;
        if(this.form.name==undefined)
            this.addorupdate = true;
        else
            this.addorupdate = false;
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
      updateSubmit(){
        console.log('update!');
      },
      backPage(){
          this.$router.push({path: ApiPath.system.startPage});
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

</style>
