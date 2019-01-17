<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods:{
            judgeLogin(){
                let isLogin = store.state.api_token;
                if(!isLogin){
                    return router.push(this.LOGINURL());
                } else {
                    this.addRouter();
                }
            }
        },
        created(){
            this.judgeLogin()
        }
    }
</script>

<style>
    #app {
        margin: 0 auto;
    }
</style>
