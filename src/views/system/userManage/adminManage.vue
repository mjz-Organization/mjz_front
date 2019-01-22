<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="addAdmin">添加管理员</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteStartPage">批量删除</el-button>
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
                :data="tableData3"
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
                prop="id"
                name="id"
                v-if="false"
                >
            </el-table-column>
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
                prop="role"
                label="角色"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="establishTime"
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
        <div class="startpage_paging">
            <span style="float:left;">共{{ currentPage1 }}条记录</span>
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="100"
            background
            layout="prev, pager, next"
            :total="1000"
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
            currentPage1: 5,
            selectContent:"",
            selecttype:"",
            tableData3: [{
                id:"1",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '普通管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }, {
                id:"2",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '系统管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }, {
                id:"3",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '普通管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }, {
                id:"4",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '普通管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }, {
                id:"5",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '普通管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }, {
                id:"6",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                role: '普通管理员',
                establishTime: '2019-1-21 16:00:00',
                accountNumber:123,
                password:123
            }
            ],
            multipleSelection: []
        }
        },

        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
            handleEdit(index, row) {
                var id = row.id;
                var name = row.name;
                var accountNumber = row.accountNumber;
                var password = row.password;
                var role = row.role;
                this.$router.push({path: ApiPath.system.adminManageAdd,query:{id:id,name:name,accountNumber:accountNumber,password:password,role:role}});
            },
            handleDelete(index, row) {
                this.$confirm('此操作将删除这条数据, 是否继续?', '提示', {
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
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
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
            selectName(){
                console.log(this.selecttype);
                console.log(this.selectContent);
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

    .clearfloat{clear:both}
</style>
