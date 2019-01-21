<template>
   <div>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="rejob">返回</el-button>
            </div>
            <div class="content">
                <el-form ref="form" :model="form" label-width="90px" label-position="left">
                <el-form-item label="类型名称：">
                    <el-input v-model="form.name"></el-input>
                </el-form-item >
                <el-form-item label="类型说明：">
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
        },
      }
    },
    methods: {
        rejob(){
            this.$router.push(ApiPath.system.jobType);
        },
        onSubmit() {
             this.get(ApiPath.system.getUserinfo,{"data":this.form}).then(res => {
                    console.log(res.data);
                });
        
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

