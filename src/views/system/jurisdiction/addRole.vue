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
                        <el-input v-model="roleName" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="content-inform">
                    <p class="content-p content-top">角色权限</p>
                    <template>
                        <el-table
                                border
                                :data="powerful"
                                style="width: 100%">
                            <el-table-column
                                    prop="name"
                                    label="一级权限"
                                    width="180"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-checkbox-group v-model="kind" @change="handleCheckedCitiesChange">
                                        <el-checkbox :label="scope.row.id" name="type">{{ scope.row.name }}</el-checkbox>
                                    </el-checkbox-group>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="address"
                                    label="二级权限"
                                    align="center">
                                <template slot-scope="scope">
                                    <el-checkbox-group v-model="kind" v-if="scope.row.children != null" @change="handleCheckedCitiesChild">
                                        <el-checkbox v-for="(tab,index) in scope.row.children" :key="index"  :label="tab.id" name="type">{{ tab.name }}</el-checkbox>
                                    </el-checkbox-group>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
                <div class="submit-button">
                    <el-button type="primary" v-if="this.$route.params.id != -1" @click="modifyRole">确认修改</el-button>
                    <el-button type="primary" v-else @click="addRole">确认添加</el-button>
                    <el-button type="success" @click="informationReset">重添</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                explain:"",
                //所有权限
                powerful:[],
                kind:[],
                //角色权限
                rolePowerful:[],
                roleName:'',
                roleNameId:-1,
            }
        },
        methods:{
            back:function () {
                this.$router.back();
            },
            getPower:function () {
                this.get(ApiPath.system.getPowerFul).then(res => {
                    let data = res.data;
                    if (data.code == 0){
                        this.powerful = data.result;
                    }
                });
            },
            handleCheckedCitiesChange:function () {
            },
            informationReset:function () {
                this.kind = [];
                this.kindChild = [];
            },
            handleCheckedCitiesChild:function () {
                for (let i = 1; i < this.powerful.length; i++) {
                    for (let j = 0; j < this.powerful[i].children.length; j++) {
                        for (let k = 0; k < this.kind.length; k++) {
                            if (this.powerful[i].children[j].id == this.kind[k]){
                                if (this.kind.indexOf(this.powerful[i].id) == -1){
                                    this.kind.push(this.powerful[i].id)
                                }
                            }
                        }
                    }
                } 
            },
            getRoleInformation:function () {
                let _this = this;
                if (_this.$route.params.id != -1){
                    _this.get(ApiPath.system.getRolePowerful,{
                        'roleId':_this.$route.params.id
                    }).then(res => {
                        let data = res.data;
                        if (data.code == 0){
                            _this.rolePowerful = data.result.roleAuth;
                            _this.roleName = data.result.role.role_name;
                            _this.roleNameId = data.result.id;
                            _this.kind = data.result.roleAuth;
                        }
                    });
                }
            },
            modifyRole:function() {
                this.rolePost(ApiPath.system.modifyRole,{
                    'roleId':this.$route.params.id,
                    'roleName':this.roleName,
                    'authArr':this.kind,
                },"修改角色信息成功");
            },
            addRole:function(){
                this.rolePost(ApiPath.system.addRole,{
                    'roleName':this.roleName,
                    'authArr':this.kind,
                },"创建角色成功");
            },
            rolePost:function (url,data,message) {
                let _this = this;
                _this.post(url,data).then(res => {
                    let data = res.data;
                    if (data.code == 0){
                        _this.$message({
                            type: 'success',
                            message: message
                        });
                    }
                });
            }
        },
        mounted(){
            this.getPower();
            this.getRoleInformation();
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