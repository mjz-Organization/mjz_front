<template>
  <div class="body box">
      <div class="loginBody box">
          <div class="b box">

            <!-- 第一个输入框 -->
            <div class="input box header">
                <label>用户名：</label> 
                <el-input
                    placeholder="请输入用户名"
                    v-model="user">
                </el-input>
            </div>

            <!-- 第二个输入框 -->
            <div class="input box">
                <label>密&nbsp;&nbsp;码：</label> 
                <el-input
                    placeholder="请输入密码"
                    v-model="password">
                </el-input>
            </div>

            <!-- 记住密码 + 忘记密码 -->
            <div class="input box">
                <div class="forget"> 
                    <el-checkbox>记住密码</el-checkbox>
                    <!-- <a>忘记密码&gt;&gt;</a> -->
                    <router-link to="/admin/findPassword">忘记密码&gt;&gt; </router-link>  
                </div>
            </div>
            
            <!-- 登陆按钮 -->
            <div class="input box loginBut">
                <el-button type="primary" @click="onSubmit()" >登录</el-button>
            </div>
          </div>
          
      </div>
      <p class="copyright">&copy;2019&nbsp;&nbsp;三月软件工作室</p>
  </div>
</template>

<script>
export default {
    name:'adminLogin',
    data() {
        return {
            user: '',
            password: '',
        }
    },
    methods:{
        onSubmit(){
            this.post(ApiPath.system.checkLogin,{
                'user': this.user,
                'password':this.password
            }).then(res => {
                if (res.data.code == 0){
                    res.data.result.roles = 'admin';
                    store.commit(types.USER,  res.data.result);
                    this.addRouter();
                    router.push({path: '/system/homepage'});
                }
            });
        }
    },
    mounted(){
        this.LOGINURL(this.$route.path);
    }
}
</script>

<style scope>
*{
    margin: 0;
}

.body{
    background:url(../../images/admin/background.jpg)no-repeat;  
    width:100%;  
    height:100%;  
    background-size:100% 100%;  
    position:absolute;  
}

/* 公共样式--flex布局 */
.box{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

/* 第一层div--设置最外面一圈透明边框 */
.loginBody{
    width: 41vw;
    height: 51vh;
    border-radius: 1vw;
    background-image: linear-gradient(  
    top,   
    rgba(255,255,255,0) 0%,   
    rgba(255,255,255,0.2) 5%,   
    rgba(255,255,255,0.4) 10%,   
    rgba(167, 166, 166, 0.6) 90%,   
    rgba(150, 148, 148, 0.8) 95%,   
    rgb(175, 173, 173) 100%);  
    margin-bottom: 30px;
}

/* 登陆的主体div */
/* 登陆的第二层div，背景为白色 */
.b{
    width: 37.5vw;
    background-color: #fff;
    border-radius: 6px;
}

/* 公共样式--设置flex盒子中div的宽度 */
.b .input{
    width: 90%;
    margin-top: 2vh;
    margin-bottom: 2vh;
}

/* 用户名div */
.b .header{
    margin-top: 10vh;
}

.b .input .el-input{
    width: 65%;
}

.box label{
    font-family: PingFangSC-Regular;
    font-size: 19px;
    letter-spacing: 5px;
    color: #535353;
}

/* 忘记密码+记住密码 */
.forget{
    display: flex;
    justify-content: space-around;
    width: 29vw;
    margin-left: 6vw;
}

.forget label,a{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #606060;
    text-decoration:none;
}

.loginBut{
    justify-content: end;
}

/* 登陆按钮 */
.loginBut button{
    width: 21vw;
    height: 6vh;
    background-image: -webkit-gradient(linear, left top, right top, from(#419dcd), to(#4bb4ea)), -webkit-gradient( linear, left top, left bottom, from(#fefdfd), to(#fefdfd));
    font-family: PingFangSC-Regular;
    font-size: 19px;
    letter-spacing: 9px;
    line-height: 1vh;
    margin-bottom: 2vh;
    margin-left: 9.5vw;
}

.copyright{
    position: absolute;
    bottom: 15px;
    color: #828385;
}
</style>