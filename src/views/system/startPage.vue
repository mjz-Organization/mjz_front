<template>
    <div>
        <div class="startpage_title">
            <div class="startpage_title_operation">
                <el-button type="primary" icon="el-icon-plus" @click="addStartPage">新增启动页</el-button>
                <el-button type="danger" icon="el-icon-menu">全部删除</el-button>
            </div>
            <div class="startpage_title_search">
                <el-input placeholder="请输入内容" class="startpage_title_text"></el-input>
                <el-button type="success" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="clearfloat"></div>
        </div>
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
        tableData3: [{
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
            Remarks: '无'
        }, {
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
            Remarks: '无'
        }, {
            ID:1,
            name: '云帆喷绘',
            img:'1.jpg',
            type: '学生端',
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
            var id = 1;
            var name = row.name;
            var img = row.img;
            var types = row.type;
            var Remarks = row.Remarks;
            this.$router.push({path: '/system/homepage/startpage/add',query:{name:name,img:img,types:types,Remarks:Remarks}});
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        addStartPage(){
            this.$router.push({path: '/system/homepage/startpage/add'});
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
        width: 320px;
        float: right;
    }

    .startpage_paging{
        margin: 10px 20px;
    }

    .clearfloat{clear:both}
</style>
