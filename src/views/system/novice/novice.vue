<template>
    <div>
         <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>首页管理</el-breadcrumb-item>
            <el-breadcrumb-item>新手导读管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus"  @click="addfile">新增文件</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteAll">全部删除</el-button>
            </div>
            <div class="startpage_title_search">
                 <el-select v-model="value"  placeholder="指南名称" class="select">
                    <el-option v-for="item in select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                <el-input placeholder="请输入内容"  v-model="searchtext"  class="startpage_title_text" ></el-input>
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
                align="center"
                sortable
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="title"
                label="指南名称"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="novice_type"
            label="类型"
            align="center"
            show-overflow-tooltip>
                <template slot-scope="scope">
                   <span v-if="scope.row.novice_type==0">学生端</span>
                   <span v-else="scope.row.novice_type==0">商家端</span>
                </template>
            </el-table-column>
            <el-table-column
            prop="updated_at"
            label="添加时间"
            align="center"
            show-overflow-tooltip>
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
        value:'',
        empty:"暂无数据",
        searchtext:'',
        select:[
            {
                label:"指南名称",
                value:0
            },
            {
                label:"文件名称",
                value:1
            }
        ]
      }
    },

    methods: {
        addfile(){
            this.$router.push(ApiPath.system.noviceAdd);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleEdit(index, row) {
            this.$router.push({path:ApiPath.system.noviceEdit, query:{index:index,row:row}});
        },
        //单个删除
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
                        na_id:row.id,
                    });
                }else{
                    for (let index = 0; index < row.length; index++) {
                        _this.deleteAd.push({
                            na_id:row[index].id,
                        });     
                    }
                }
                this.POST(ApiPath.system.deleteNovice,{"na":_this.deleteAd}).then(res => {
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
                    this.delete(this.multipleSelection);
                   
                }
        },
        search(){
            if(this.value==''&&$.trim(this.searchtext)==''){
                 this.$message({
                        type: 'warning',
                        message: '搜索项不能为空！'
                    });

            }else{
                this.get(ApiPath.system.novice).then(res => {
                    // console.log;
                    if(res.data.length==0){
                        this.tableData=[];
                        this.size=this.tableData.length;
                        this.empty="您查询的数据不存在";
                    }else{
                        this.tableData=res.data;
                        this.size=this.tableData.length;
                    }
                })
            }
        },
        getList(){
            let _this = this;
            var datas = {
                "page" : _this.currentPage,
                "per_page":_this.pagesize,
                "novice_type":_this.value,
                "select_data":_this.searchtext
            }
            this.GET(ApiPath.system.selectNovice,datas).then(res => {
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
    .el-table{
        margin: 30px;
    }
    .startpage_paging{
        margin: 10px 20px;
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
