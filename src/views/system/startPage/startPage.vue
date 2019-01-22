<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="addStartPage">新增启动页</el-button>
                <el-button type="danger" icon="el-icon-menu" @click="deleteStartPage">全部删除</el-button>
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
                prop="ID"
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
                label="名称"
                sortable
                align="center"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="img"
            label="图片"
            align="center"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="type"
            label="类别"
            sortable
            align="center"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="Remarks"
            label="备注"
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
  export default {
    data() {
      return {
        currentPage1: 5,
        selectContent:"",
        tableData3: [{
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
            Remarks: '无'
        }, {
            ID:2,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
            Remarks: '无'
        }, {
            ID:3,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
            Remarks: '无'
        }, {
            ID:4,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '商家端',
            Remarks: '无'
        }, {
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '商家端',
            Remarks: '无'
        }, {
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '商家端',
            Remarks: '无'
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
            var id = row.ID;
            var name = row.name;
            var img = row.img;
            var types = row.type;
            var Remarks = row.Remarks;
            this.$router.push({path: ApiPath.system.startPageAdd,query:{id:id,name:name,img:img,types:types,Remarks:Remarks}});
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
        addStartPage(){
            this.$router.push({path: ApiPath.system.startPageAdd});
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
            console.log(this.multipleSelection);
        },
        selectName(){
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
