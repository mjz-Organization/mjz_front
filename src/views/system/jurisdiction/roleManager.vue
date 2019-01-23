<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="exportInform">新添类型</el-button>
                <el-button type="danger" icon="el-icon-delete">全部删除</el-button>
            </div>
            <div class="clearfloat distance"></div>
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="#"
                        type="index"
                        align="center">
                </el-table-column>
                <el-table-column
                        prop="kind"
                        label="角色名称"
                        sortable
                        align="center"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="reason"
                        label="创建时间"
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
        </div>
        <div class="startpage_paging">
            <span style="float:left;">共{{ countPage }}条记录</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :page-size="thisPage"
                    background
                    layout="prev, pager, next"
                    :total="countPage"
                    align="right">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'complaintInform',
        data(){
            return{
                //分页
                tableData3:[{
                    ID:1,
                    complainant:"xxxx",
                    complainants:"xxxx",
                    kind:"xxx",
                    reason:"xxx",
                    detailReason:"xxx",
                    time:"xxxx"
                }],
                countPage:1,
                thisPage:10,

                multipleSelection:"",
            }
        },
        methods:{
            exportInform: function () {

            },
            //全选时的操作
            handleSelectionChange:function (val) {
                this.multipleSelection = val;
                console.log(val)
            },
            handleEdit:function(index, row){
                this.$router.push({name:"addRole"});
            },
            handleDelete:function(index,row){
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
            },
            handleCurrentChange:function(val) {
                console.log(`当前页: ${val}`);
            },
            handleSizeChange:function(val) {
                console.log(`每页 ${val} 条`);
            },
            //分页请求数据
            getInformation:function(){
                this.post(ApiPath.system.checkLogin).then(res => {

                });
            }
        }
    }
</script>
<style>
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
        width: 320px;
        float: right;
    }

    .startpage_paging{
        margin: 10px 30px;
    }

    .clearfloat{
        clear:both
    }
    .distance{
        margin-bottom: 30px;
    }
</style>