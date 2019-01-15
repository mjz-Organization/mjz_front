<template>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods:{
      isMobile() {
        try{
          document.createEvent("TouchEvent");
          return true;
        }
        catch(e){
          return false;
        }
      }
    },
    mounted(){
      if (this.isMobile()) {
        this.$router.push({
          path: '/mlogin'
        });
      }else {
        this.$router.push({
          path: '/plogin'
        });
      }
    }
  }
</script>

