<template>
    <div>
        <div class="detailed-content">
            <div class="detailed-header">
                <el-button type="primary" @click="back">返回</el-button>
            </div>
            <div class="font-content">
                <div class="content-inform">
                    <div class="content-p">角色名称&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    <div class="content-p input-width">
                        <el-input v-model="complainName" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="content-inform">
                    <p class="content-p content-top">角色权限</p>
                    <template>
                        <el-table
                                border
                                :data="tableData"
                                style="width: 100%">
                            <el-table-column
                                    label="一级权限"
                                    width="180"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-checkbox-group v-model="kind">
                                        <el-checkbox label="页面管理" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="二级权限"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-checkbox-group v-model="kind">
                                        <el-checkbox label="新增产品" name="type"></el-checkbox>
                                        <el-checkbox label="页面管理" name="type"></el-checkbox>
                                        <el-checkbox label="页面管理" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
                <div class="submit-button">
                    <el-button type="primary">确认修改</el-button>
                    <el-button type="success">重添</el-button>
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
                kind:[],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
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
        line-height: 40px;
    }
    .content-p{
        display: block;
        width: 200px;
        margin-bottom: 19px;
        text-align: left;
    }
    .input-width{
        width: 300px;
    }
    .submit-button{
        margin-top: 25px;
        float: right;
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
</style>