<template>
    <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>启动页管理</el-breadcrumb-item>
            <el-breadcrumb-item>学生端</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="addStartPage">新增启动页</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteStartPage">全部删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-input placeholder="请输入内容" class="startpage_title_text" v-model="selectContent"></el-input>
                <el-button type="success" icon="el-icon-search" @click="selectName">搜索</el-button>
            </div>
            <div class="clearfloat"></div>
        </div>
        <el-table
                id="out-table"
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 95%;margin: 30px;"
                @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="启动页顺序"
                prop="img_order"
                align="center">
            </el-table-column>
            <el-table-column
                prop="ad_name"
                label="名称"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="path"
                label="图片"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <img  :src="scope.row.path" alt="" style="width: 50px;height: 50px">
                </template>
            </el-table-column>
            <el-table-column
                prop="content"
                label="图片说明"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="img_order"
                label="调整顺序"
                align="center"
                width="200"
                show-overflow-tooltip>
                <template slot-scope="scope" >
                    <el-input placeholder="输入调整位置" v-model="scope.row.target">
                        <el-button slot="append" icon="el-icon-check" @click="changePosition(scope.$index, scope.row)"></el-button>
                    </el-input>
                </template>
            </el-table-column>
            <el-table-column
            prop="address"
            label="操作"
            align="center"
            show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="startpage_paging">
            <span style="float:left;">共{{ total }}条记录</span>
            <el-pagination
            @current-change="handleCurrentChange"
            :page-size="pageCount"
            layout="prev, pager, next"
            :total="total"
            background
            align="right">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        total: 0,   //总条数
        pageCount:10,    //每页显示条数
        currentPage:1,    //当前页
        selectContent:"",       
        search:"",
        tableData:[],
            // tableData: [{
            //     ID:1,
            //     ad_name: '云帆喷绘',
            //     path:'1.jpg',
            //     type: '学生端',
            //     content: '无',
            //     img_order:1,
            //     zk:""
            // }, {
            //     ID:2,
            //     ad_name: '云帆喷绘',
            //     path:'2.jpg',
            //     type: '学生端',
            //     content: '无',
            //     img_order:2,
            //     zk:""
            // }, {
            //     ID:3,
            //     ad_name: '云帆喷绘',
            //     path:'3.jpg',
            //     type: '学生端',
            //     content: '无',
            //     img_order:3,
            //     zk:""
            // }, {
            //     ID:4,
            //     ad_name: '云帆喷绘',
            //     path:'4.jpg',
            //     type: '商家端',
            //     content: '无',
            //     img_order:4,
            //     zk:""
            // }, {
            //     ID:1,
            //     ad_name: '云帆喷绘',
            //     path:'5.jpg',
            //     type: '商家端',
            //     content: '无',
            //     img_order:5,
            //     zk:""
            // }, {
            //     ID:1,
            //     ad_name: '云帆喷绘',
            //     path:'6.jpg',
            //     type: '商家端',
            //     content: '无',
            //     img_order:6,
            //     zk:""
            // }
            // ],
        multipleSelection: [],
        deleteAd:[]
      }
    },
    //页面加载时获取广告列表
    mounted(){
        let own = this;
        this.GET(ApiPath.system.selectAd,{"page":own.currentPage,"per_page":own.pageCount,"record_type":0})
        .then(function(res){
            if(res.data.code == 0){
                var a = res.data.result.data
                //将得到结果数据遍历，添加一个字段，用来存储输入的调整顺序
                for (let index = 0; index < a.length; index++) {
                    a[index].target = "";
                }
                own.tableData = a;
                own.total = res.data.result.total;
                own.pageCount = res.data.result.per_page;
            }else if(res.data.code == 2){
                own.$message({
                message: '获取广告列表失败',
                type: 'error'
                });
            }
                // self.leftMenus = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
    },
    methods: {
        //选中某条数据时添加到multiple数组中
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },

        //修改数据
        handleEdit(index, row) {
            console.log(row);
            var id = row.id;
            var ad_name = row.ad_name;
            var path = row.path;
            // var path = 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            var content = row.content;
            var images_id = row.images_id;
            this.$router.push({path: ApiPath.system.studentStartPageAdd,query:{id:id,images_id:images_id,ad_name:ad_name,path:path,types:types,content:content}});
        },

        //删除单条记录
        handleDelete(index, row) {
            this.deleteFun(row);
        },

        //删除操作
        deleteFun(row){
            let own = this;
            own.deleteAd = [];
            this.$confirm('此操作将要删除数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                if(!(row instanceof Array)){
                    own.deleteAd.push({
                        ad_id:row.id,
                        images_id:row.images_id,
                        path:row.path
                    });
                }else{
                    for (let index = 0; index < row.length; index++) {
                        own.deleteAd.push({
                            ad_id:row[index].id,
                            images_id:row[index].images_id,
                            path:row[index].path
                        });     
                    }
                }
                console.log(own.deleteAd);
                own.POST(ApiPath.system.deleteAd,{"ad":own.deleteAd})
                .then(function(res){
                    if(res.data.code == 0){
                        own.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else{
                        own.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }
                })
                .catch(function(err){
                    console.log(err);
                });
            }).catch(() => {
                own.$message({
                    type: 'info',
                    message: '已取消操作'
                });          
            });
        },

        //点击分页时跳转到此方法
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },

        //跳转到新增启动页页面
        addStartPage(){
            this.$router.push({path: ApiPath.system.studentStartPageAdd});
        },

        //删除多条记录
        deleteStartPage(){
            if(this.multipleSelection.length == 0){
                this.$message({
                    type: 'warning',
                    message: '请选择要删除的数据!'
                });
            }else{
                this.deleteFun(this.multipleSelection);
            }
            // console.log(this.multipleSelection);
        },

        //获取文本框的内容进行搜索
        selectName(){
            let own = this;
            this.GET(ApiPath.system.selectAd,{
                "page":own.currentPage,
                "per_page":own.pageCount,
                "record_type":1,
                "xxxx":own.selectContent
            }).then(function(res){
                if(res.data.code == 0){
                    var a = res.data.result.data
                    //将得到结果数据遍历，添加一个字段，用来存储输入的调整顺序
                    for (let index = 0; index < a.length; index++) {
                        a[index].target = "";
                    }
                    own.tableData = a;
                    own.total = res.data.result.total;
                    own.pageCount = res.data.result.per_page;
                }else if(res.data.code == 2){
                    own.$message({
                        message: '搜索启动页失败',
                        type: 'error'
                    });
                }
            })
            .catch(function(err){
                console.log(err);
            });
            console.log(this.selectContent);
        },

        //根据输入的目标顺序进行调整
        changePosition(index, row){
            let own  = this;
            var from_id = row.img_order;
            var to_id = row.target;
            console.log(to_id);

            if(from_id == to_id){
                this.$message({
                    type: 'warning',
                    message: '该图片本身就在该位置!'
                });
                return;
            }
            if(to_id < 1 || to_id > this.total){
                this.$message({
                    type: 'error',
                    message: '您要调整的位置不存在!'
                });
                return;
            }

            this.POST(ApiPath.system.changeOrderAd,{"from_id":from_id,"to_id":to_id})
            .then(function(res){
                if(res.data.code == 0){
                    own.$message({
                        type: 'success',
                        message: '调整成功!'
                    });
                }else{
                    own.$message({
                        type: 'error',
                        message: '调整失败!'
                    });
                }
            })
            .catch(function(err){
                console.log(err);
            });
            var a = row.target;
            row.target = "";
        }
    }
  }
</script>

<style scoped>
    .startpage_title{
        margin: 30px;
    }

    .startpage_title_operation{
        float: left;
    }

    .startpage_title_text{
        width: 200px;
    }

    .startpage_title_search{
        float: right;
    }

    .startpage_paging{
        margin: 10px 30px;
    }

    .breadcrumb{
        padding-left: 30px;
        line-height: 54px;
        border-bottom: 2px solid #e7e7e7;
    }
    .clearfloat{clear:both}
</style>


<style scoped>
    .startpage_title{
        margin: 30px;
    }

    .startpage_title_operation{
        float: left;
    }

    .startpage_title_text{
        width: 200px;
    }

    .startpage_title_search{
        float: right;
    }

    .startpage_paging{
        margin: 10px 30px;
    }

    .breadcrumb{
        padding-left: 30px;
        line-height: 54px;
        border-bottom: 2px solid #e7e7e7;
    }

    .clearfloat{clear:both}
</style>
