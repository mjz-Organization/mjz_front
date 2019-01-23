<template>
    <div>
        <div class="detailed-content">
            <div class="detailed-header">
                <el-button type="primary" @click="back">返回</el-button>
            </div>
            <div class="font-content">
                <div class="content-inform">
                    <p class="content-p">投诉名称</p>
                    <div class="content-p input-width">
                        <el-select v-model="power" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="content-inform">
                    <p class="content-p">投诉名称</p>
                    <div class="input-width">
                        <el-select v-model="power" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="content-inform">
                    <p class="content-p">投诉名称</p>
                    <div class="input-width">
                        <el-input v-model="complainName" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="content-inform">
                    <p class="content-p content-top">说明</p>
                    <div class="complain-div">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 10, maxRows: 2}"
                                placeholder="请输入内容"
                                v-model="explain">
                        </el-input>
                    </div>
                </div>
                <div class="submit-button">
                    <el-button type="primary">确认添加</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                complainName:"",
                explain:"",
                power:""
            }
        },
        methods:{
            back:function () {
                this.$router.back();
            }
        },
        created(){

        }
    }
</script>
<style>
    .detailed-content{
        margin: 40px 150px;
    }
    .detailed-header{
        border-bottom: 1px solid gainsboro;
        height: 60px;
    }
    .font-content{
        margin-top: 25px;
    }
    .content-inform{
        color: grey;
        font-family: Caladea;
        font-size: 16px;
        line-height: 60px;
    }
    .content-p{
        display: inline-block;
        width: 200px;
        text-align: left;
    }
    .input-width{
        width: 300px;
        display: inline-block;
        text-align: left;
    }
    .submit-button{
        margin-top: 25px;
    }
    .content-top{
        text-align: justify;
        float: left;
        margin-top: 10px;
    }
    .complain-div{
        width: 300px;
        display: inline-block;
        margin-top: 20px;
    }
    .img-div > img{
        width: 100%;
        height: 100%;
    }
    .el-select {
        width: 300px;
    }

</style>