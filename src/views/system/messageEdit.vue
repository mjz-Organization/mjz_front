<template>
   <div>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="renovice">返回</el-button>
            </div>  
            <div class="content">
                <el-form ref="form" :model="form" label-width="90px" label-position="left">
                <el-form-item label="消息名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="消息类型">
                    <el-select v-model="form.address" placeholder="请选择">
                   <el-option  label="工作通知" v-model:value="form.address.student"></el-option>
                    <el-option  label="提现通知" v-model:value="form.address.customer"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="消息内容">
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
                address:{
                    "student":"工作通知",
                    "customer":"提现通知"
                },
                desc: '',
                file:[],
        },
      }
    },
    methods: {
        renovice(){
            this.$router.push('/system/homepage/messageType');
        },
        onSubmit() {
             this.get(ApiPath.system.getUserinfo,{"data":this.form}).then(res => {
                    console.log(res.data);
                });
        
        },
        handleChange(file, fileList) {
        this.file= fileList.slice(-3);
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
    
</style>

