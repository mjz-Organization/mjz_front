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
                console.log(this.LOGINURL())
            }
        }
    }
</script>