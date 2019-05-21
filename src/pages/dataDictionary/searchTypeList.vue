<template>
    <div class="searchTypeList1">
        <div class="first">
            <el-button type='primary' @click='addPop(1)'>新增一级类型</el-button>
            <el-table
                :data="firstList"
                index
                stripe
                @row-click='rowClick'
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
                        <el-button type="text" size="small" @click="modifyPop(scope.row,1)">修改</el-button>
                        <el-button type="text" size="small" @click="delMt(scope.row,1)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="second">
            <el-button type='primary' @click='addPop(2)'>新增二级类型</el-button>
            <el-table
                :data="secondList"
                index
                stripe
                size='medium'
                style="width: 100%">>
                <el-table-column
                    type='index'
                    label="序号"
                    align='center'
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="id"
                    label="id"
                    align='center'
                    width="150">
                </el-table-column>
                <el-table-column
                    prop="value"
                    label="类型名称"
                    align='center'
                    width="200">
                </el-table-column>
                <el-table-column
                    prop="typeCode"
                    label="类型code"
                    align='center'
                    width="220">
                    <template slot-scope="scope">
                        {{ scope.row.typeCode | belong }}
                    </template>
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="启用状态"
                    align='center'
                    width="220">
                    <template slot-scope="scope">
                        {{ scope.row.status | status }}
                    </template>
                </el-table-column>
                <!-- <el-table-column
                    prop="description"
                    label="描述">
                </el-table-column> -->
                <el-table-column
                    label="操作">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="modifyPop(scope.row,2)">修改</el-button>
                        <el-button type="text" size="small" @click="delMt(scope.row,2)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <!-- 新增/修改 -->
        <el-dialog
            title="提示"
            :visible.sync="enterDialogVisible"
            width="30%"
            center>
            <div v-for="it in typeList" :key="it.id" class="searchItem" v-if="it.show">
                <p class="searchLabel">{{it.name}}：</p>
                <div class="searchValue">
                    <el-input v-if="it.inputType === 'text'" v-model="it.value" :placeholder='it.placeholder'></el-input>
                    <el-date-picker
                        v-if="it.inputType === 'date'" 
                        v-model="it.value"
                        type="datetime"
                        :placeholder='it.placeholder'>
                    </el-date-picker>
                    <el-radio-group v-model="it.value" v-if="it.inputType === 'radio'" :placeholder='it.placeholder'>
                        <el-radio v-for="is in it.children" :key="is.id" :label="is.value">{{is.label}}</el-radio>
                    </el-radio-group>
                    <el-input v-if="it.inputType === 'textarea'" type="textarea" v-model="it.value" :placeholder='it.placeholder'></el-input>
                </div>
            </div>
            <p class="saveBtn">
                <el-button v-if="curOptionClass === 1" type="primary" @click="save(1)">保存1</el-button>
                <el-button v-else type="primary" @click="save(2)">保存2</el-button>
            </p>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          typeList:[],
          firstTypeList:[
              {
                  id:'0',
                  name:'类型名称',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型名称',
                  show:true
              },
              {
                  id:'1',
                  name:'类型code',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型code',
                  show:true
              },
              {
                  id:'2',
                  name:'描述',
                  value:'',
                  inputType:'textarea',
                  placeholder:'请输入描述',
                  show:true
              },
              {
                  id:'3',
                  name:'是否启用',
                  value:'1',
                  inputType:'radio',
                  placeholder:'请输入类型名称',
                  show:false,
                  children:[
                      {
                          id:'0',
                          label:'否',
                          value:'0'
                      },
                      {
                          id:'1',
                          label:'是',
                          value:'1'
                      }
                  ]
              }
          ],
          secondTypeList:[
              {
                  id:'0',
                  name:'类型名称',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型名称',
                  show:true,
              },
              {
                  id:'1',
                  name:'类型code',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型code',
                  show:true,
              },
              {
                  id:'2',
                  name:'类型表ID',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型表ID',
                  show:true,
              },
              {
                  id:'3',
                  name:'排序值',
                  value:'',
                  inputType:'text',
                  placeholder:'请输入类型code',
                  show:true,
              },
              {
                  id:'4',
                  name:'描述',
                  value:'',
                  inputType:'textarea',
                  placeholder:'请输入描述',
                  show:false,
              },
              {
                  id:'5',
                  name:'是否启用',
                  value:'1',
                  inputType:'radio',
                  placeholder:'请输入类型名称',
                  show:false,
                  children:[
                      {
                          id:'0',
                          label:'否',
                          value:'0'
                      },
                      {
                          id:'1',
                          label:'是',
                          value:'1'
                      }
                  ]
              }
          ],
          curOptionClass:0, //当前操作类型级别 1/2
          curOptionType:'', //当前操作类型 新增/修改
          curModifyId:'',   //当前修改或删除操作id
          firstList:[],
          secondList:[],
          enterDialogVisible: false
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
            let val = ''
            if (value === '0') {
                val = '资讯'
            }else if(value === '1'){
                val = '惠政'
            }else{
                val = '服务'
            }
            return val
        }
    },
    methods:{
        // 一级列表
        getMtPage(){
            this.$post(this.$api.dataDictionary.getMtPage,{}).then(res=>{
                if (res.code === '000') {
                    this.firstList = res.data && res.data.list
                }else{
                    this.$message({
                        message:'获取列表失败',
                        type:'error'
                    })
                }
            })
        },
        // 二级列表
        getMcList(id){
            this.$post(this.$api.dataDictionary.getMcList,{
                menuTypeId:id
            }).then(res=>{
                if (res.code === '000') {
                    this.secondList = res.data 
                }else{
                    this.$message({
                        message:'获取列表失败',
                        type:'error'
                    })
                }
            })
        },
        // 点击一级列表获取二级列表数据
        rowClick(row, event, column){
            this.getMcList(row.id)
        },
        addPop(type){
            this.typeList = type===1?this.firstTypeList:this.secondTypeList
            this.curOptionClass = type
            this.enterDialogVisible = true
            this.curOptionType = '新增'
            this.curModifyId = rows.id
        },
        modifyPop(rows,type){
            if (!rows.id) {
                this.$message({
                    message:'类型id不能为空',
                    type:'warning'
                })
                return
            }

            if (type===1) {
                this.typeList = this.firstTypeList
                this.typeList[3].value = rows.status
                this.typeList[3].show = true;
            }else{
                this.typeList = this.secondTypeList
                this.typeList[4].show = true;
                this.typeList[5].show = true;
            }
            this.curOptionClass = type
            this.curModifyId = rows.id
            this.curOptionType = '修改'
            this.enterDialogVisible = true
        },
        //删除
        delMt(rows,type){
            if (!rows.id) {
                this.$message({
                    message:'类型id不能为空',
                    type:'warning'
                })
                return;
            }
            let url = type===1?this.$api.dataDictionary.delMt:this.$api.dataDictionary.delMcById
            this.$post(url,{
                id:rows.id
            }).then(res=>{
                if (res.code === '000') {
                    this.$message({
                        message:'删除类型成功',
                        type:'success'
                    })
                    this.getMtPage()
                    this.secondList = []
                    // this.getMcList(rows.typeCode)
                }else{
                    this.$message({
                        message:'删除类型失败',
                        type:'error'
                    })
                }
            })
        },
        //新增和修改
        save(type){
            // type 1一级  2二级
            let url = ''
            let params = {}
            //请求参数
            if (type === 1) {
                //新增
                url = this.$api.dataDictionary.saveOrUpdateMt
                params = {
                    typeName:this.typeList[0].value,
                    typeCode:this.typeList[1].value,
                    description:this.typeList[2].value,
                    status:this.typeList[3].value
                }
                // 修改
                if (this.curOptionType === '修改') {
                    params.id = this.curModifyId
                }
            }else{
                url = this.$api.dataDictionary.saveMc
                params = {
                    value:this.typeList[0].value,
                    code:this.typeList[1].value,
                    menuTypeId:this.typeList[2].value,
                    sort:Number(this.typeList[3].value)
                }
                if (this.curOptionType === '修改') {
                    params.id = this.curModifyId
                }
            }
            this.$post(url,params).then(res=>{
                if (res.code === '000') {
                    this.$message({
                        message:`${this.curOptionType}类型成功`,
                        type:'success'
                    })
                }else{
                    this.$message({
                        message:`${this.curOptionType}类型失败`,
                        type:'error'
                    })
                }
                if (type === 1) {
                    this.getMtPage()
                }else{
                    this.getMcList(this.curModifyId)
                }
                this.enterDialogVisible = false
            })
        }
    }
  }
</script>

<style lang='less' scoped>
.searchTypeList1{
    padding:35px;
    .second{
        margin-top:35px;
    }
}
</style>
