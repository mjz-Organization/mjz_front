<template>
    <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页管理</el-breadcrumb-item>
            <el-breadcrumb-item>广告管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-select v-model="value"  class="select"
                @change="valuechange">
                    <el-option v-for="item in select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                <el-button type="primary" icon="el-icon-plus"  @click="addfile">新增广告</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteAll">全部删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-input  class="startpage_title_text" v-model="searchtext"></el-input>
                <el-button type="success" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
            <div class="clearfloat"></div>
        </div>
        <el-table
        ref="multipleTable"
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        style="width: 95%;margin: 30px;"
        :empty-text="empty"
        @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="id"
                label="#"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="ad_name"
                label="名称"
                align="center"
                sortable
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
                label="广告描述"
                align="center"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="type"
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
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="startpage_paging">
            <span style="float:left;padding-left:15px">共{{ total }}条记录</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pagesize"
                background
                layout="prev, pager, next"
                :total="total"
                align="right">
            </el-pagination>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage:1,
        tableData: [],
        pagesize:10,
        total:0,
        multipleSelection: [],
        searchtext:"",
        empty:"暂无数据",
        select:[
        {
            label:"学生端",
            value:0
        },
        {
            label:"商家端",
            value:1
        }],
        value:0,
        deleteAd:[],
      }
    },

    methods: {
        //添加广告
        addfile(){
            this.$router.push({path:ApiPath.system.adverAdd,query:{type:this.value}});
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //修改广告内容
        handleEdit(index, row) {
            this.$router.push({path:ApiPath.system.adverEdit, query:{index:index,row:row}});
        },
        //单个删除数据
        handleDelete(index, row) {
            this.delete(row);
        },
        handleSizeChange(val) {
            this.pagesize=val;
        },
        handleCurrentChange(val) {
            this.currentPage=val;
        },
         handleClick() {
            alert('button click');
        },
        //删除操作
        delete(row){
            let _this = this;
            _this.deleteAd=[];
            this.$confirm('此操作将删除所选数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                if(!(row instanceof Array)){
                    _this.deleteAd.push({
                        ad_id:row.id,
                        images_id:row.images_id,
                        path:row.path
                    });
                }else{
                    for (let index = 0; index < row.length; index++) {
                        _this.deleteAd.push({
                            ad_id:row[index].id,
                            images_id:row[index].images_id,
                            path:row[index].path
                        });     
                    }
                }
                this.POST(ApiPath.system.deleteIndexAd,{"ad":_this.deleteAd}).then(res => {
                    if(res.data.code==0){
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }else if(res.data.code==1){
                         this.$message({
                            type: 'error',
                            message: '删除失败!'
                        });
                    }
                }).catch(err => {
                    console.log(err);
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消操作'
                });          
            });
            
        },
        //批量删除
         deleteAll(){
             if(this.multipleSelection.length == 0){
                    this.$message({
                        type: 'warning',
                        message: '请选择要删除的数据!'
                    });
                }else{
                    this.delete(_this.multipleSelection);
                }
         },
         //查询
          search(){
            if($.trim(this.searchtext)==''){
                 this.$message({
                        type: 'warning',
                        message: '搜索项不能为空！'
                    });

            }else{
                this.getList();
            }
        },
        valuechange(){
          this.getList();  
        },
        //获取列表
        getList(){
            let _this = this;
            var datas = {
                "page" : _this.currentPage,
                "per_page":_this.pagesize,
                "record_type":_this.value,
            }
            if(this.searchtext!=""){
                datas.select_data=_this.searchtext;
            }
            this.GET(ApiPath.system.selectIndexAd,datas).then(res => {
                if(res.data.code==0){
                    _this.tableData=res.data.result.data;
                    _this.total=res.data.result.total;
                }else if(res.data.code==2){
                     _this.$message({
                            essage: '获取广告页失败',
                            type: 'error'
                        });
                }

            }).catch(err => {
                console.log(err);
            })
        },
        //调整位置
        changePosition(index,row){
            var order = row.img_order;
            var target = row.target;
             if(order == target){
                this.$message({
                    type: 'warning',
                    message: '图片位置未发生改变!'
                });
                return;
            }
            if(target < 1 || target > this.total){
                this.$message({
                    type: 'error',
                    message: '超出范围!'
                });
                return;
            }
            this.POST(ApiPath.system.changeOrderIndexAd,{"from_id":order,"to_id":target})
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
    },
    mounted(){
        this.getList();
    
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
        margin: 10px 20px;
    }
    .el-table{
        margin: 30px;
    }
    .clearfloat{
        clear:both
    }
    .el-dropdown {
        vertical-align: top;
    }
    .el-dropdown + .el-dropdown {
        margin-left: 15px;
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .select{
        width: 110px;
    }
    .breadcrumb{
    padding-left: 30px;
    line-height: 54px;
    border-bottom: 2px solid #e7e7e7;
    }

</style>
