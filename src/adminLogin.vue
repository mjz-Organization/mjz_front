<template>
  <div class="body box">
      <div class="loginBody box">
          <div class="b box">

            <!-- 第一个输入框 -->
            <div class="input box">
                <label>用户名：</label> 
                <el-input
                    placeholder=""
                    prefix-icon="el-icon-search"
                    v-model="user">
                </el-input>
            </div>

            <!-- 第二个输入框 -->
            <div class="input box">
                <label>密&nbsp;&nbsp;码：</label> 
                <el-input
                    placeholder=""
                    prefix-icon="el-icon-user"
                    v-model="passwoed">
                </el-input>
            </div>

            <!-- 记住密码 + 忘记密码 -->
            <div class="input forget">
                <div>
                <el-checkbox v-model="checked">记住密码</el-checkbox>
                <a>忘记密码&gt;&gt;</a>
                </div>
            </div>
            <!-- 登陆按钮 -->
            <div class="input loginBut">
                <el-row>
                    <el-button type="primary" >登陆</el-button>
                </el-row>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          user      : '',
          passwoed  : '',
      }
  },
}
</script>

<style scope>
*{
    margin: 0;
}
.body{
    background:url(assets/admin/background.png)no-repeat;  
    width:100%;  
    height:100%;  
    background-size:100% 100%;  
    position:absolute;  
}

.box{
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
}

.loginBody{
width: 34vw;
height: 38vh;
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

.b{
width: 32vw;
height: 35vh;
background-color: #fff;
border-radius: 6px;
}

.b .input{
    width: 80%;
}
.b .input .el-input{
    width: 60%;
}
.box label{
    font-family: PingFangSC-Regular;
    font-size: large;
    letter-spacing: 5px;
    color: #535353;
}

.forget label,a{
    font-family: PingFangSC-Regular;
    font-size: 1vw;
    font-weight: normal;
    font-stretch: normal;
    line-height: 1vw;
    letter-spacing: 0vw;
    color: #606060;
}

/* 登陆按钮 */
.loginBut{
    width: 0%;
}
</style>
