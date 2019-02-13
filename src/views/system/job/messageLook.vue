<template>
   <div>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="renovice">返回</el-button>
            </div>  
            <div class="content">
                <el-form ref="data" :v-model="data" label-width="90px" label-position="left">
                <el-form-item label="商家名称">
                    <!-- <el-input v-model="form.name"></el-input> -->
                    {{data.name}}
                </el-form-item>
                <el-form-item label="消息类型">
                    {{data.type}}
                </el-form-item>
                <el-form-item label="需要人数">
                    <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
                     {{data.number}}
                </el-form-item>
                 <el-form-item label="薪资待遇">
                    {{data.salary}}
                </el-form-item>
                 <el-form-item label="工作时间">
                    {{data.date}}
                </el-form-item>
                 <el-form-item label="内容描述">
                    {{data.des}}
                </el-form-item>
                 <el-form-item label="负责人">
                    {{data.person}}
                </el-form-item>
                 <el-form-item label="负责人电话">
                    {{data.phone}}
                </el-form-item>
                 <el-form-item label="地址信息">
                    {{data.adress}}
                </el-form-item>
                 <el-form-item label="已招人数">
                    {{data.count}}
                </el-form-item>
                 <el-form-item label="已招员工">
                    {{data.staff}}
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                </el-form-item> -->
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {
            name:"商家名称",
            type:"销售",
            number:"30",
            salary:"200元/天",
            date:"2019/1/1-2019/12/30",
            des:"巴拉巴拉巴拉",
            person:"小A",
            phone:"15136790965",
            adress:"河南省新乡",
            count:"30/10",
            staff:"张三,李四"

        },
      }
    },
    methods: {
        renovice(){
            this.$router.push(ApiPath.system.jobMessage);
        },
    },
    mounted(){
        // this.data = this.$route.query.row;
        // console.log(this.data);
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

