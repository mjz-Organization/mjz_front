<template>
   <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页管理</el-breadcrumb-item>
            <el-breadcrumb-item>新手导读管理</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="main">
            <div class="head">
                <el-button type="primary" icon="el-icon-arrow-left" @click="renovice">返回</el-button>
            </div>
            <div class="content">
                <el-form ref="form" :model="form" label-width="90px" label-position="left">
                <el-form-item label="指南名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="使用位置">
                    <el-select v-model="form.value" placeholder="请选择使用位置">
                    <el-option v-for="item in address"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="启动页说明" style="height:400px;">
                    <quill-editor 
                    v-model="content" 
                    ref="quillEditor" 
                    class="editor"
                    :options="editorOption" 
                    @blur="onEditorBlur($event)" 
                    @focus="onEditorFocus($event)"
                    @change="onEditorChange($event)">
                </quill-editor>
                <!-- 从数据库读取展示 -->
                <div v-html="str" class="ql-editor">
                    {{str}}
                </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-if="addorupdate"  @click="onSubmit">添加</el-button>
                    <el-button type="primary" v-if="!addorupdate"  @click="updateform">修改</el-button>
                    <el-button type="primary" v-if="addorupdate"  @click="resetForm('form')">重置</el-button>
                </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import { quillEditor  } from "vue-quill-editor"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
  export default {
    components: {
        quillEditor 
    },
    data() {
      return {
        form: {
            id:"",
            name:"",
            desc:"",
            value:0,
        },
        address:[{
            "value":0,
            "label":"学生端",
                    
        },{
            "value":1,
            "label":"商家端",
        }],
        articleTitle:'',
        content: ``,
        str: '',
        editorOption: {},
        title:"",
        addorupdate:true,
      }
    },
    methods: {
        renovice(){
            this.$router.push(ApiPath.system.novice);
        },
        onSubmit() {
            if(this.form.name==""||this.form.desc==""){
                    this.$message({
                        type:'error',
                        message:"必填项不能为空！"
                    })
                }else{
                     var datas = {
                        "title":this.image,
                        "content":this.form.desc,
                        "novice_type":this.form.value
                    }
                    let _this=this;
                    this.POST(ApiPath.system.createNovice,datas).then(res => {
                        if(res.data.code==0){
                            _this.$message({
                                type:'success',
                                message:"添加成功！"
                            });
                            _this.resetForm(_this.form);

                        }else if(res.data.code==2){
                            _this.$message({
                                type:'error',
                                message:"添加失败！"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }
        
        },
        updateform(){
            // deleteNovice
            if(this.form.name==""||this.form.desc==""){
                    this.$message({
                        type:'error',
                        message:"必填项不能为空！"
                    })
                }else{
                     var datas = {
                        "novice_id":this.form.id,
                        "title":this.image,
                        "content":this.form.desc,
                        "novice_type":this.form.value
                    }
                    let _this=this;
                    this.POST(ApiPath.system.updateNovice,datas).then(res => {
                        if(res.data.code==0){
                            _this.$message({
                                type:'success',
                                message:"修改成功！"
                            });
                            _this.resetForm(_this.form);

                        }else if(res.data.code==2){
                            _this.$message({
                                type:'error',
                                message:"修改失败！"
                            });
                        }
                    }).catch(err => {
                        console.log(err);
                    })
            }

        },
        resetForm(form) {
            this.$refs[form].resetFields();
        },
        onEditorReady(editor) { // 准备编辑器
    
        },
        onEditorBlur(){

        }, // 失去焦点事件
        onEditorFocus(){

        }, // 获得焦点事件
        onEditorChange(){
            this.form.desc=this.content;
            // console.log(this.content);
        }, // 内容改变事件
        // 转码
        escapeStringHTML(str) {
            str = str.replace(/</g,'<');
            str = str.replace(/>/g,'>');
            return str;
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    },
    mounted(){
        var index = this.$route.query.index;
        if(index==undefined){
            this.title="新增文件";
        }else{
            var forms = this.$route.query.row;
            this.title="编辑文件";
            this.addorupdate=false;
            this.form.id=forms.id;
            this.form.name=forms.title;
            this.form.value=forms.novice_type;
            this.form.desc=forms.content;
             this.content=forms.content;
        }


    }
  }
</script>

<style scoped>
    .main{
        width: 50%;
        margin-left: 100px;
        margin-top: 2%;
    }
    .head{
        height: 60px;
        border-bottom: 2px solid #dcdfe6;
        margin-bottom: 5%;
    }
    .breadcrumb{
    padding-left: 30px;
    line-height: 54px;
    border-bottom: 2px solid #e7e7e7;
    }
    .editor{
        height: 300px;
        width: 700px;
    }
</style>

