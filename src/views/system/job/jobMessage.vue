<template>
    <div>
        <el-breadcrumb separator="/" class="breadcrumb">
            <el-breadcrumb-item :to="{ path: '#' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>兼职管理</el-breadcrumb-item>
            <el-breadcrumb-item>兼职信息管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="startpage_title">
             <div class="startpage_title_operation">
                <el-button type="primary" @click="exportExcel">导出</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteAll">批量删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-select v-model="value"  placeholder="指南名称" class="select">
                    <el-option v-for="item in select"
                    :key="item.vaule"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                <el-input placeholder="请输入内容" class="startpage_title_text" v-model="searchtext"></el-input>
                <el-button type="success" icon="el-icon-search" @click="search">搜索</el-button>
            </div>
            <div class="clearfloat"></div>
        </div>
        <el-table
                id="table"
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
                label="商家名称"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="type"
                label="兼职类型"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="settlement"
                label="薪资结算类型"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="description"
                label="状态"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="salary"
                label="薪资"
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="address"
                label="操作"
                align="center"
                show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button size="mini" type="success" @click="handlelook(scope.$index, scope.row)"><i class="el-icon-view"></i></el-button>
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
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
    export default {
        data() {
        return {
            currentPage:1,
            tableData: [{
                ID:1,
                name: '小麦卡其',
                type: '发传单',
                settlement:'日结',
                description:'招人中',
                salary: '100.0',
            },{
                ID:2,
                name: '小麦卡其',
                type: '发传单',
                settlement:'日结',
                description:'招人中',
                salary: '100.0',
            },{
                ID:3,
                name: '小麦卡其',
                type: '发传单',
                settlement:'日结',
                description:'招人中',
                salary: '100.0',
            },{
            ID:4,
                name: '小麦卡其',
                type: '发传单',
                settlement:'日结',
                description:'招人中',
                salary: '100.0',
            }],
            pagesize:10,
            size:0,
            multipleSelection: [],
            value:'',
            searchtext:'',
            empty:"暂无数据",
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
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection);
            },
            handlelook(index, row) {
                this.$router.push({path:ApiPath.system.messageLook,query:{row:row}});
            },
            handleSizeChange(val) {
                this.pagesize=val;
                console.log(`每页 ${val} 条`);
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
            },
            handleCurrentChange(val) {
                this.currentPage=val;
                console.log(`当前页: ${val}`);
            },
            handleClick() {
                
                alert('button click');
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
            exportExcel(){
                this.$confirm('是否要导出数据?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                        }).then(() => {
                            var wb = XLSX.utils.table_to_book(document.querySelector('#table'))
                            var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                            try {
                                FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'jobMessage.xlsx')
                            } catch (e) { 
                                if (typeof console !== 'undefined') 
                                    console.log(e, wbout) 
                                    this.$message({
                                    type: 'danger',
                                    message: '导出失败!'
                                    });
                                    }
                            return wbout
                            
                        }).catch(() => {
                            this.$message({
                                type: 'info',
                                message: '已取消导出！'
                            });          
                        });
            }
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
