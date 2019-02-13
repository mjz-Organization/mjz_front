<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-download" @click="exportData">导出数据</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteStartPage">批量删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-select v-model="selecttype" placeholder="请选择查询类别">
                    <el-option label="用户名" value="用户名"></el-option>
                    <el-option label="性别" value="性别"></el-option>
                    <el-option label="已实名" value="已实名"></el-option>
                    <el-option label="未实名" value="未实名"></el-option>
                    <el-option label="创建时间" value="创建时间"></el-option>
                </el-select>
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
                prop="gender"
                label="性别"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="telephone"
                label="联系方式"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="isRealName"
                label="是否实名"
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
                    <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>查看详情</el-button>
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
                isRealName: '已实名',
                establishTime: '2019-1-21 16:00:00'
            }, {
                id:"2",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                isRealName: '已实名',
                establishTime: '2019-1-21 16:00:00'
            }, {
                id:"3",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                isRealName: '已实名',
                establishTime: '2019-1-21 16:00:00'
            }, {
                id:"4",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                isRealName: '未实名',
                establishTime: '2019-1-21 16:00:00'
            }, {
                id:"5",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                isRealName: '未实名',
                establishTime: '2019-1-21 16:00:00'
            }, {
                id:"6",
                name:"老弟",
                gender: '男',
                telephone:'13888888888',
                isRealName: '未实名',
                establishTime: '2019-1-21 16:00:00'
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
                // var name = row.name;
                // var gender = row.gender;
                // var telephone = row.telephone;
                // var isRealName = row.isRealName;
                // var establishTime = row.establishTime;
                this.$router.push({path: ApiPath.system.merchantManageDetails,query:{id:id}});
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
            exportData(){
                this.$confirm('此操作将导出本页数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '导出成功!'
                    });
                    // var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
                    // var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                    // try {
                    //     FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'userManage.xlsx')
                    // } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
                    // return wbout
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消导出'
                    });          
                });
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
