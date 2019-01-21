<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus"  @click="addfile">新增文件</el-button>
                <el-button type="danger" icon="el-icon-menu">全部删除</el-button>
            </div>
            <div class="startpage_title_search">
                 <el-select v-model="value"  placeholder="指南名称" class="select">
                    <el-option v-for="item in select"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                    </el-select>
                <el-input placeholder="请输入内容"  class="startpage_title_text" ></el-input>
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
                label="指南名称"
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
            prop="type"
            label="类型"
            align="center"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="description"
            label="文件描述"
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
// import mock from '../../../mock/sysMock.js'
  export default {
    data() {
      return {
        currentPage:1,
        tableData: [],
        pagesize:10,
        size:0,
        multipleSelection: [],
        value:'',
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
            console.log(this.multipleSelection);
        },
        handleEdit(index, row) {
            // this.$router.push(ApiPath.system.noviceEdit,{"index":index,"row":row});
            this.$router.push(ApiPath.system.noviceEdit);
        },
        handleDelete(index, row) {
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
    },
    mounted(){
    //     this.get(ApiPath.system.novice).then(res => {
    //         this.tableData=res.data.data.array;
    //         this.size=this.tableData.length;
    //     })
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

</style>
