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
                let isLogin = store.state.user;
                if(isLogin){
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
