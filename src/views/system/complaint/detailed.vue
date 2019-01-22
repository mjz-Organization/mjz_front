<template>
    <div>
        <div class="detailed-content">
            <div class="detailed-header">
                <el-button type="primary" @click="back">反回</el-button>
            </div>
            <div class="font-content">
                <div class="content-inform">
                    <p class="content-p">投诉者</p>
                    <p class="content-p">{{detailInformation.complainant}}</p>
                </div>
                <div class="content-inform">
                    <p class="content-p">被投诉者</p>
                    <p class="content-p">{{detailInformation.complainants}}</p>
                </div>
                <div class="content-inform">
                    <p class="content-p">诉者时间</p>
                    <p class="content-p">{{detailInformation.kind}}</p>
                </div>
                <div class="content-inform">
                    <p class="content-p">投诉类型</p>
                    <p class="content-p">{{detailInformation.reason}}</p>
                </div>
                <div class="content-inform">
                    <p class="content-p">具体投诉类型</p>
                    <p class="content-p">{{detailInformation.detailReason}}</p>
                </div>
                <div class="content-inform">
                    <p class="content-p content-top">具体愿因</p>
                    <textarea  readonly unselectable="on" class="text-col">{{detailInformation.detailReason}}</textarea>
                </div>
                <div class="content-inform">
                    <p class="content-p">附属图片</p>
                    <div class="picture">
                        <div class="img-div">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                detailInformation:null
            }
        },
        methods:{
            back:function () {
                this.$router.back();
            }
        },
        created(){
            this.detailInformation = JSON.parse(sessionStorage.getItem("information"));
        }
    }
</script>
<style>
    .detailed-content{
        margin: 40px 150px;
    }
    .detailed-header{
        border-bottom: 1px solid gainsboro;
        height: 60px;
    }
    .font-content{
        margin-top: 25px;
    }
    .content-inform{
        color: grey;
        font-family: Caladea;
        font-size: 16px;
        line-height: 40px;
    }
    .content-p{
        display: inline-block;
        width: 200px;
        text-align: left;
    }
    .text-col{
        width: 300px;
        height: 200px;
        margin-top: 25px;
    }
    .content-top{
        text-align: justify;
        float: left;
        margin-top: 10px;
    }
    .picture{
        width: 350px;
    }
    .img-div{
        width: 70px;
        height: 70px;
        margin-left: 15px;
        margin-bottom: 15px;
        border-radius: 5px;
        display: inline-block;
    }
    .img-div > img{
        width: 100%;
        height: 100%;
    }
</style>