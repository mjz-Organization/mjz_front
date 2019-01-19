<template>
   <div class="login">
       <div class="content">
            <div class="popup"  v-if="popupVisible">
                <p>{{Message}}</p>
            </div>
            <div class="head">
            <div >
                <img src="" alt="">

            </div>
            </div>
            <div class="login_form">
                <form action="ApiPath.student.checkLogin" 
                @submit="checkForm"
                novalidate="true"
                method="post"
                >
                    <ul>
                        <li>
                            <input type="text"  v-model="form.username"  name ="user" placeholder="用户名">
                        </li>
                        <li>
                            <input type="password" v-model="form.password"  name ="password" placeholder="用户密码">
                        </li>
                        <li>
                            <input type="submit" @click="popup" value="登录">
                        </li>
                    </ul>
                </form>
            </div>
            <div class="operation">
                <div >
                    <router-link to="/student/register">新用户注册</router-link>
                    <router-link to="/student/password">忘记密码？</router-link>
                </div>
            </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: 'stuLogin',
        data () {
            return {
                form:{
                    username:null,
                    password:null,
                },
                popupVisible:false,
                Message:'',
                
            }
        },
        watch:{
            popupVisible:function(val){
                if(this.popupVisible){
                    let _this = this;
                    setTimeout(function(){
                        _this.popupVisible=false;
                    },2000);
                }
            }
        },
        methods:{
           checkForm: function(e){
               if(!this.username){
                   this.Message="用户名不能为空";
                   e.preventDefault();   
               }else if(!this.password){
                    this.Message="密码不能为空";
                    e.preventDefault();
               }else if(!this.validuser(this.username)){
                   this.Message="用户名错误";
                   e.preventDefault();
               }else if(!this.validpass(this.password)){
                    this.Message="密码错误";
                    e.preventDefault();
               }else{
                   this.post(ApiPath.student.checkLogin,{'student':this.form}).then(res =>{

                   })
               }
               e.preventDefault();
            
                
           },
           //用户名正则
           validuser:function(user){
               var regx=/^[\w-]{6,12}/;
               return regx.test(user);
           },
           //用户密码正则
           validpass:function(password){
               var regx=/^[\w-]{6,12}/;
               return regx.test(user);
           },
           popup:function(){
               this.popupVisible=true;
           }
        },
        mounted(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .popup {
        opacity: .5;
        background: #000;
        border-radius: 20px;
    }
    .popup p{
        color: #ffffff;
        text-align: center;
        line-height: 40px;
    }
   .login{
        width: 100%;
        height: 100%;
        background-color: rgb(56,202,213);
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
       
    }
    .content{
        display: flex;
        -webkit-display:flex;
        flex-direction: column;
        -webkit-flex-direction:column;
        width: 70%;
        height: 50%;
        margin: auto;
        padding-top: 20%;
    }
    .head div{
        width: 70px;
        height: 70px;
        background-color: #ffffff;
        border-radius: 50%;
        margin: auto;
    }
    .login_form form{
        margin-top: 50px;
        margin-bottom: 10px;
        text-align: center;
    }
    .login_form ul{
        list-style: none;
    }
    .login input{
        color: #ffffff;
        outline: none;
        height:  50px;
        width: 100%;
    }
    .login input::-webkit-input-placeholder{
        color: #ffffff;
    }
    .login_form input[type="text"],input[type="password"]{
        border: 0px ;
       
        background-color: rgb(56,202,213);
        border-bottom: 1px solid #ffffff;
    }
    .login_form input[type="submit"]{
        margin-top: 10px;
        border: 1px solid #ffffff;
        border-radius: 30px;
        opacity: 0.61;
        font-size: 20px;
        height: 40px;
    }
    .operation div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding:0 15px;
    }
    .operation div  a{
        text-decoration-line: none;
        font-size: 10px;
        color: #ffffff;
    }
    .message{
        /* display: flex;
        flex-direction: row;
        justify-content:center; */
        /* font-size: 20px; */
        z-index: 99;
    }


/*iphone4 4s*/
@media screen and (min-width: 320px) and (max-width: 480px) {

}

/*iphone6*/
@media (min-width : 375px) and (max-width : 667px) and (-webkit-min-device-pixel-ratio : 2){


}

/*iphone6+*/
@media (min-width : 414px) and (max-width : 736px) and (-webkit-min-device-pixel-ratio : 3){

}

/* iPads (portrait)  */
@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : portrait) {

}

/* iPads (landscape)  */
@media only screen and (min-width : 768px) and (max-width : 1024px) and (orientation : landscape) {

}

/* iPads (portrait and landscape) */
@media only screen and (min-width : 768px)and (max-width : 1024px) {

}

/*魅族*/
@media only screen and (min-width :1080px) and (-webkit-min-device-pixel-ratio : 2.5){

 }

/*mate7*/
@media only screen and (min-width :1080px) and (-webkit-min-device-pixel-ratio : 3){

 }

/* 平板之类的宽度 1024 以下设备 */
@media only screen and (min-width: 321px) and (max-width: 1024px) {

}
    

</style>
