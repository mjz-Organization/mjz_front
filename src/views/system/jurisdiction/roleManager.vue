<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="exportInform">新添类型</el-button>
                <el-button type="danger" icon="el-icon-delete" @click="deleteAll">全部删除</el-button>
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
                        prop="id"
                        label="#"
                        sortable
                        align="center"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="role_name"
                        label="角色名称"
                        sortable
                        align="center"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="created_at"
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
            <span style="float:left;">共{{ countItem }}条记录</span>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-sizes="pageSizes"
                    :page-size="thisPage"
                    layout="sizes, prev, pager, next"
                    :total="countItem"
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
                tableData3:[],
                //总条数
                countItem:1,
                //当前页的条数
                thisPage:10,
                //当前页
                currentPage:1,
                //每页条数
                pageSizes:[10, 20, 30, 40],
                //删除角色id
                idRole:[],
                multipleSelection:"",
            }
        },
        methods:{
            exportInform: function () {
                this.$router.push({name:"addRole",params: { id: -1 }});
            },
            //全部删除
            deleteAll:function(){
                let _this = this;
                if (_this.multipleSelection.length != 0){
                    for (let i = 0 ; i < _this.multipleSelection.length ; i++){
                        _this.idRole.push(_this.multipleSelection[i].id);
                        _this.deleteWarn(_this.idRole);
                    }
                }
            },
            //全选时的操作
            handleSelectionChange:function (val) {
                this.multipleSelection = val;
            },
            handleEdit:function(index, row){
                this.$router.push({name:"addRole",params: { id: row['id'] }});
            },
            handleDelete:function(index,row){
                let _this = this;
                _this.idRole.push(_this.tableData3[index].id);
                _this.deleteWarn(_this.idRole);
            },
            //删除提示
            deleteWarn:function(idRole){
                let _this = this;
                _this.$confirm('此操作将删除所选数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    _this.deleteItem(idRole);
                }).catch(() => {
                    _this.$message({
                        type: 'info',
                        message: '已取消操作'
                    });
                });
            },
            handleCurrentChange:function(val) {
                sessionStorage.setItem("page",val);
                this.getInformation(val,this.thisPage);

            },
            handleSizeChange:function(val) {
                this.getInformation(this.currentPage,val);
            },
            //删除表格
            deleteTable:function(){
                for (let i = 0 ; i < this.idRole.length ; i++)
                    for (let j = 0;j < this.tableData3.length;j++)
                        if (this.idRole[i] == this.tableData3[j].id)
                            this.tableData3.splice(j,1);
            },
            //删除角色
            deleteItem:function(idRole){
                let _this = this;
                _this.post(ApiPath.system.deleteRole,{
                    "idArr":idRole,
                }).then(res => {
                    let data = res.data;
                    if (data.code == 0){
                        _this.deleteTable();
                        _this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                    }
                });
            },
            //分页请求数据
            getInformation:function(page,pageSize){
                this.get(ApiPath.system.getListRole,{
                    "page":page,
                    "pageSize":pageSize
                }).then(res => {
                    let data = res.data;
                    if (data.code == 0){
                        this.tableData3 = data.result.data;
                        this.countItem = data.result.total;
                    }
                });
            }
        },
        mounted(){
            if (sessionStorage.getItem("page") != undefined){
                this.currentPage = parseInt(sessionStorage.getItem("page"));
            }
            this.getInformation(this.currentPage,this.thisPage);
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