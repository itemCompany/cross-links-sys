<template>
    <div><!-- class="user" -->
          <div  class="search">
            <el-input class="searchValue" v-model="userName" placeholder="用户名搜索"></el-input>
            <el-input class="searchValue"  v-model="email" placeholder="用户邮箱搜索"></el-input>
            <el-button type="primary">查询</el-button>
          </div>
          <div>
             <el-table
            :data="list"
            index
            stripe
            size='medium'
            style="width: 100%">
            <el-table-column
                type='index'
                label="序号"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="userName"
                label="用户名"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别"
                align='center'
                width="100">
                <template slot-scope="scope">
                    {{ scope.row.sex | sexCn }}
                </template>
            </el-table-column>
            <el-table-column
                prop="nickName"
                label="昵称"
                align='center'
                width="100">
            </el-table-column>
             <el-table-column
                prop="realName"
                label="真实姓名"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="mobile"
                label="手机号码"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="createTime"
                label="创建时间"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="status"
                label="是否有效"
                align='center'
                width="100">
                <template slot-scope="scope">
                    {{ scope.row.status | status }}
                </template>
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="modify(scope.row)">修改</el-button>
                    <el-button type="text" size="small" @click="delMt(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table> 
            <div><!-- class="block" -->
                
                <el-pagination 
                  class="searchValue"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPageNumber"
                  :page-sizes="[10, 20, 50]"
                  :page-size="pageSize"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="total">
                </el-pagination>
            </div>

          </div>
        
    </div>
</template>

<script>
  export default {
    data() {
      return {
        userName:"",
        email:"",
        list:[],
        total: 0,
        param:{

        },
        success_code:"000",
        pageSize: 10,
        currentPageNumber: 1
      };
    },
    filters:{
       sexCn(value){
         if(value){
            return  value==0?'男':'女';
         }else{
              return '未知'
            }
       },
       status(value){
                if(value){
                    return value==0?'停用':'启用';
                }else{return '未知';}
       } 
    },
    created(){
      this.getUiPage();
    },
    methods:{
      handleSizeChange(val) {
        this.pageSize=val;
        this.param.rows=val;
        this.getUiPage();
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPageNumber=val;
        this.param.page=val;
        this.getUiPage();
        console.log(`当前页: ${val}`);
      },
      getUiPage(){
        this.$post(this.$api.user.getUiPage,this.param).then(res=>{
                 if(res.code==this.success_code){
                         this.list=res.data.list;
                         this.total=res.data.total;
                 }else{
                     this.$message({
                     message:"出现异常,请联系管理员",
                     type:'error'})  
                 }

        })
      }


    }
  }
</script>

<style lang='less' scoped>
.search{
   padding: 10px,100px;
   .el-input {
     width:220px;
     padding: 10px
   };
   .el-button{
      padding: 10px
   }

.searchValue{
            float: left;
        }   

}
</style>
