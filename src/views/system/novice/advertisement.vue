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
                prop="ID"
                label="#"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="name"
                label="名称"
                align="center"
                sortable
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="img"
                label="图片"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="description"
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
                    <el-input placeholder="输入调整位置" v-model="scope.row.zk">
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
            <span style="float:left;padding-left:15px">共{{ size }}条记录</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pagesize"
                background
                layout="prev, pager, next"
                :total="size"
                align="right">
            </el-pagination>
        </div>
    </div>
</template>

<script>
// import mock from '../../mock/sysMock.js'
  export default {
    data() {
      return {
        currentPage:1,
        tableData: [{
            ID:1,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type:0,
        },{
            ID:2,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type: 0,
        },{
            ID:3,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type: 0,
        },{
            ID:4,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type: 0,
        },{
            ID:4,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type: 1,
        },{
            ID:4,
            name: '云帆喷绘',
            img:'a.jpg',
            description:'广告说明文字',
            type: 1,
        }
        ],
        pagesize:10,
        size:0,
        multipleSelection: [],
        searchtext:'',
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
      }
    },

    methods: {
        addfile(){
            this.$router.push({path:ApiPath.system.adverAdd,query:{type:value}});
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
        },
        handleEdit(index, row) {
            this.$router.push({path:ApiPath.system.adverEdit, query:{index:index,row:row}});
        },
        handleDelete(index, row) {
             this.$confirm('此操作将删除所选数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消操作'
                        });          
                    });
            // console.log(index, row);
        },
        handleSizeChange(val) {
            this.pagesize=val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage=val;
            console.log(`当前页: ${val}`);
        },
         handleClick() {
            
            alert('button click');
        },
         deleteAll(){
             if(this.multipleSelection.length == 0){
                    this.$message({
                        type: 'warning',
                        message: '请选择要删除的数据!'
                    });
                }else{
                    this.$confirm('此操作将删除所选数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {

                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消操作'
                        });          
                    });
                }
         },
          search(){
            if($.trim(this.searchtext)==''){
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
        valuechange(){
            // console.log(this.value);
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
    mounted(){
        this.size=this.tableData.length;
        // this.get(ApiPath.system.advertisement).then(res => {
        //     this.tableData=res.data.data.array;
        //     this.size=this.tableData.length;
        // })
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
