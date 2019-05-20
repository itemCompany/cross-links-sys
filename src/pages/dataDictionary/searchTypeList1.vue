<template>
    <div class="searchTypeList1">
        <div></div>
        <el-table
            :data="list"
            index
            stripe
            size='medium'
            style="width: 100%">>
            <el-table-column
                type='index'
                label="序号"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="id"
                label="id"
                align='center'
                width="100">
            </el-table-column>
            <el-table-column
                prop="typeName"
                label="类型名称"
                align='center'
                width="200">
            </el-table-column>
            <el-table-column
                prop="typeCode"
                label="类型code"
                align='center'
                width="180">
                <template slot-scope="scope">
                    {{ scope.row.typeCode | belong }}
                </template>
            </el-table-column>
            <el-table-column
                prop="status"
                label="启用状态"
                align='center'
                width="180">
                <template slot-scope="scope">
                    {{ scope.row.status | status }}
                </template>
            </el-table-column>
            <el-table-column
                prop="description"
                label="描述">
            </el-table-column>
            <el-table-column
                label="操作">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="modify(scope.row)">修改</el-button>
                    <el-button type="text" size="small" @click="delMt(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[]
      };
    },
    created(){
        this.getMtPage()
    },
    filters:{
        status(value){
            return value === 0?'否':'是'
        },
        belong(value){
            return value === '0'?'资讯':value === '1'?'惠政':'服务'
        }
    },
    methods:{
        getMtPage(){
            this.$post(this.$api.dataDictionary.getMtPage,{}).then(res=>{
                if (res.code === '000') {
                    this.list = res.data && res.data.list
                }else{
                    this.$message({
                        message:'获取列表失败',
                        type:'error'
                    })
                }
            })
        },
        modify(rows){
            if (!rows.id) {
                this.$message({
                    message:'类型id不能为空',
                    type:'warning'
                })
                return;
            }
            this.$router.push({path:'/addFirstSearchType',query:{content:rows}})
        },
        delMt(rows){
            if (!rows.id) {
                this.$message({
                    message:'类型id不能为空',
                    type:'warning'
                })
                return;
            }
            this.$post(this.$api.dataDictionary.delMt,{
                id:rows.id
            }).then(res=>{
                if (res.code === '000') {
                    this.$message({
                        message:'删除类型成功',
                        type:'success'
                    })
                }else{
                    this.$message({
                        message:'删除类型失败',
                        type:'error'
                    })
                }
            })
            this.getMtPage()
        }
    }
  }
</script>

<style lang='less' scoped>
.searchTypeList1{
    padding:35px;
}
</style>
