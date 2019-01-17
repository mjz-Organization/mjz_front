<template>
    <div class="min">
        <h1>我是后台登陆Demo</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'sysLogin',
        data () {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            onSubmit(){
                this.post(ApiPath.system.checkLogin,{'admin': this.form}).then(res => {
                    if (res.data.code == 0){
                        this.$store.commit(types.LOGIN, res.data.result.api_token);
                        this.$router.push({path: '/system/index'});
                    }
                });
            }
        },
        mounted(){
            this.LOGINURL('/system/login');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .min{
        width: 20%;
        margin: 300px auto 0;
    }
</style>
