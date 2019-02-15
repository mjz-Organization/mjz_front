<template>
    <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="addAdmin">添加管理员</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteStartPage">批量删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-input placeholder="请输入内容" class="startpage_title_text" v-model="selectContent"></el-input>
                <el-button type="success" icon="el-icon-search" @click="selectAdminList">搜索</el-button>
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
                prop="id"
                name="id"
                v-if="false"
                >
            </el-table-column>
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
                prop="name"
                label="用户名"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="role_name"
                label="角色"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="created_at"
                label="创建时间"
                :formatter="dateFormat"
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
            <span style="float:left;">共{{ total }}条记录</span>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            :current-page="pageNo"
            background
            layout="prev, pager, next"
            :total="total"
            align="right">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    // import FileSaver from 'file-saver'
    // import XLSX from 'xlsx'
    export default {
        data() {
        return {
            total: 0,       //总条数
            currentPage:0,  //当前页码
            pageSize:10,    //每页显示条数
            pageNo:1,      //当前页码
            selectContent:"",
            tableData:[],
            multipleSelection: [],
            deleteAd:[]     //要删除的管理员数组
        }
        },
        mounted(){
            this.selectAdminList();
        },
        // created(){
            // let pn = sessionStorage.getItem('pageNo');
            // this.pageNo = pn;
        // },
        methods: {
            //获取标准时间
            dateFormat:function(row, column) {
                var date = row.created_at; 
                if (date == undefined) { 
                    return ""; 
                }
                return date;
                // console.log(this.unixToDate(date,false));
                // return moment(date).format("YYYY-MM-DD HH:mm:ss"); 
                // return this.unixToDate(date,"YYYY-MM-DD HH:mm:ss");
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                // console.log(this.multipleSelection);
            },
            handleEdit(index, row) {
                var id = row.id;
                var role_name = row.role_name;
                var role_id = row.role_id;
                this.$router.push({path: ApiPath.system.adminManageAdd,query:{id:id,role_id:role_id,role_name:role_name}});
            },
            handleDelete(index, row) {
                this.deleteFun(row);
            },
            deleteFun(row){
                let own = this;
                own.deleteAd = [];
                this.$confirm('此操作将要删除数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    if(!(row instanceof Array)){
                        own.deleteAd.push(row.id);
                    }else{
                        for (let index = 0; index < row.length; index++) {
                            own.deleteAd.push(row[index].id);     
                        }
                    }
                    console.log(own.deleteAd);
                    own.post(ApiPath.system.deleteAd,{"idArr":own.deleteAd})
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
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(val)
                // sessionStorage.setItem('pageNo', val);
                console.log(`当前页: ${val}`);
            },
            addAdmin(){
                this.$router.push({path: ApiPath.system.adminManageAdd});
            },
            deleteStartPage(){
                if(this.multipleSelection.length == 0){
                    this.$message({
                        type: 'warning',
                        message: '请选择要删除的数据!'
                    });
                }else{
                    this.deleteFun(this.multipleSelection);
                }
            },
            selectAdminList(){
                let own = this;
                var tj = {"page":own.currentPage,"pageSize":own.pageSize};
                if(this.selectContent!=""){
                    tj.name = this.selectContent;
                }
                this.get(ApiPath.system.getAdmins,tj)
                .then(function(res){
                    if(res.data.code == 0){
                        own.tableData = res.data.result.data;
                        // console.log(res.data.result);
                        own.total = res.data.result.total;
                    }else if(res.data.code == 2){
                        own.$message({
                            essage: '获取管理员列表失败',
                            type: 'error'
                        });
                    }
                })
                .catch(function(err){
                    console.log(err);
                });
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
