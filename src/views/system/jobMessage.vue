<template>
    <div>
        <div class="startpage_title">
            <!-- <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus"  @click="addfile">新增文件</el-button>
                <el-button type="danger" icon="el-icon-menu">全部删除</el-button>
            </div> -->
            <div class="startpage_title_search">
                <el-dropdown >
                    <el-button type="primary" style="border:1px solid #dcdfe6;color:#000;background-color:#ffffff;">
                        请选择<i class="el-icon-arrow-down el-icon--right"></i>
                    </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>商家名称</el-dropdown-item>
                    <el-dropdown-item>兼职类型</el-dropdown-item>

                </el-dropdown-menu>
                </el-dropdown>
                <el-input placeholder="请输入内容" class="startpage_title_text" ></el-input>
                <el-button type="success" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="clearfloat"></div>
        </div>
        <el-table
                ref="multipleTable"
                :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                tooltip-effect="dark"
                style="width: 100%"
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
            show-overflow-tooltip
            >
                <template slot-scope="scope">
                    <el-button size="mini" type="text" @click="handlelook(scope.$index, scope.row)">查看详情</el-button>
                    <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i></el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <div class="startpage_paging">
            <span style="float:left;">共{{ size }}条记录</span>
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
        tableData: [],
        pagesize:10,
        size:0,
        multipleSelection: []
      }
    },

    methods: {
        addfile(){
            this.$router.push('/system/homepage/noviceAdd');
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection);
        },
        handlelook(index, row) {
            this.$router.push('/system/homepage/messageLook',{"index":index,"row":row});
        },
        // handleDelete(index, row) {
        //     console.log(index, row);
        // },
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
