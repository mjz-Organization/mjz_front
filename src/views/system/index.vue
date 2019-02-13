<template>
    <h1 @click="test">来了，老弟！</h1>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods:{
            test(){
                this.get(ApiPath.system.getAdmininfo).then(res=>{
                    console.log(res)
                });
            }
        }
    }
</script>

