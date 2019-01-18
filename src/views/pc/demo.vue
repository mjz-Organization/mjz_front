<template>
    <div id="content">
        <el-table
            ref="multipleTable"
            :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
            tooltip-effect="dark"
             border
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip>
            </el-table-column>
             <el-table-column
            label="操作">    
              <template slot-scope="scope">
                <el-button-group >
                    <el-button type="primary" plain  icon="el-icon-edit" size="small" @click="edit(scope.row)"></el-button>
                    <el-button type="danger" plain  icon="el-icon-delete" size="small"></el-button>
                </el-button-group>
              </template>
            </el-table-column>
        </el-table>
        <div class="page">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[8, 13]"
            :page-size="pagesize"
            layout="total,sizes, prev, pager, next, jumper"
            :total="tableData3.length">
           </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          tableData3: 
          [
        //     {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-08',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-06',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-07',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }
        
        ],
        multipleSelection: [],
        currentPage: 1,
        pagesize:8,

        }

    },
     mounted:function(){
           axios.get(ApiPath.user.table).then(res =>{
                // for (var i in res.data) {
                    // this.tableData3.push(res.data); 
                // }
                    console.log(res.data.data.array);
                     this.tableData3=res.data.data.array; 
                })
        },
    methods:{
        toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val);
      },
       handleSizeChange(val) {
         this.pagesize = val;
      },
      handleCurrentChange(val) {
        this.currentPage= val;
      },
      edit(val){
        console.log(val);
      }
    },
    computed:{

    },
    components:{
       
    }
}

</script>
       
 

 <style  scoped>
    #content{
      width: 80%;
      height: 100%;
      float: right;
    }
    .page{
      margin-top: 20px;
      text-align: center;
    }
</style>
