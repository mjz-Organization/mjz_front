<template>
  <div class="body box">
      <div class="loginBody box">
          <div class="b box">

            <!-- 第一个输入框-手机号 -->
            <div class="input box header">
                <label>手机号：</label> 
                <el-input
                    placeholder="手机号"
                    v-model="phone">
                </el-input>
            </div>

            <!-- 第二个输入框-验证码 -->
            <div class="input box code">
                <label>验证码：</label> 
                <el-input
                    placeholder="验证码"
                    v-model="code">
                </el-input>
                <el-button type="primary">获取验证码</el-button>
            </div>

           <!-- 第三个输入框-新密码 -->
            <div class="input box">
                <label>新密码：</label> 
                <el-input
                    placeholder="新密码"
                    v-model="password">
                </el-input>
            </div>
            
            <!-- 登陆按钮 -->
            <div class="input box loginBut">
                <el-button type="primary" >找回</el-button>
            </div>
          </div>
      </div>
      <p class="copyright">&copy;2019&nbsp;&nbsp;三月软件工作室</p>

  </div>
</template>

<script>
export default {

  data() {
      return {
          phone     : '',
          code      : '',
          password  : '',
      }
  },
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
    margin-top: 9vh;
}

.b .input .el-input{
    width: 65%;
}

.b .code .el-input{
    width: 13.5vw;
    margin-right: 0.6vw;
}

.b .code .el-button--primary{
    background-image: linear-gradient(90deg, 
		#419dcd 0%, 
		#4bb4ea 100%), 
	linear-gradient(
		#00ccff, 
		#00ccff);
	background-blend-mode: normal, 
		normal;
    width: 8vw;
}

.loginBut{
    justify-content: end;
}

/* 登陆按钮 */
.loginBut button{
    width: 21.5vw;
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