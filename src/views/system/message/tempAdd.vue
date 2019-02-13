<template>
   <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>消息管理</el-breadcrumb-item>
            <el-breadcrumb-item>消息模板管理</el-breadcrumb-item>
            <el-breadcrumb-item>新增类型</el-breadcrumb-item>
        </el-breadcrumb>
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

                    <el-select v-model="form.value" placeholder="请选择">
                   <el-option v-for="item in address"
                   :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="消息内容">
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
            value:''
        },
        address:[{
            "value":0,
            "label":"工作通知",
                    
        },{
            "value":1,
            "label":"提现通知",
        }
        ],
      }
    },
    methods: {
        renovice(){
            this.$router.push(ApiPath.system.messageTemplate);
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
    .breadcrumb{
    padding-left: 30px;
    line-height: 54px;
    border-bottom: 2px solid #e7e7e7;
    }
</style>

