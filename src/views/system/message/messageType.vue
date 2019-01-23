<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus"  @click="addfile">新增类型</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteAll">全部删除</el-button>
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
                align="center"
                sortable
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="name"
                label="类型名称"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="file_name"
            label="文件"
            align="center"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="description"
            label="说明"
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
            name: '手机防骗攻略',
            file_name:'test.txt',
            description: '无',
        },{
           ID:2,
            name: '手机防骗攻略',
            file_name:'test.txt',
            description: '无',
        },{
            ID:3,
            name: '手机防骗攻略',
            file_name:'test.txt',
            description: '无',
        },{
           ID:4,
            name: '手机防骗攻略',
            file_name:'test.txt',
            description: '无',
        }],
        pagesize:10,
        size:0,
        multipleSelection: [],
        empty:"暂无数据"
      }
    },

    methods: {
        addfile(){
            this.$router.push(ApiPath.system.messageAdd);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
        },
        handleEdit(index, row) {
            this.$router.push({path:ApiPath.system.messageEdit, query:{index:index,row:row}});
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
            console.log(index, row);
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
    },
    mounted(){
        // this.get(ApiPath.system.novice).then(res => {
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
        width: 40%;
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

</style>
