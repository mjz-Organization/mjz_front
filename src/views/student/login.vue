<template>
   <div class="login">
       <div class="content">
        <div class="head">
           <div >
               <img src="" alt="">
           </div>
        </div>
        <div class="login_form">
            <form action="">
                <ul>
                    <li>
                        <input type="text" class="" placeholder="用户名">
                    </li>
                    <li>
                        <input type="password" placeholder="用户密码">
                    </li>
                    <li>
                        <input type="submit" name="" id="">
                    </li>
                </ul>
            </form>
        </div>
        <div class="operation">
            <div >
                <a href="#">忘记密码？</a>
                <a href="#">新用户注册</a>
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
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods:{
            onSubmit(){
                this.get(ApiPath.system.getUserinfo).then(res => {
                    console.log(res.data);
                });
            }
        },
        mounted(){
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
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



</style>
