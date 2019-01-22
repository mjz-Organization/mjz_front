<template>
<div class="addstart_content">
    <div class="addstart_title">
        <el-button type="primary" icon="el-icon-back" @click="backPage">返回</el-button>
    </div>
    <h1 class="font-style">添加商家端启动页</h1>
    <el-form ref="form" :model="form" label-width="15%"  label-position="left">
        <el-form-item label="启动页名称:">
            <el-input v-model="form.name" style="width:300px;"></el-input>
        </el-form-item>
        <el-form-item label="启动页图片:">

        </el-form-item>
        <el-form-item label="图片说明">
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
          this.$router.push({path: ApiPath.system.businessStartPage});
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
        margin: 50px 0;
        font-size: 30px;
    }
</style>
