<template>
    <div class="addSearchType">
        <h3>新增二级搜索类别</h3>
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
            <el-button type="primary" @click="save">保存</el-button>
        </p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          typeList:[
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
            //   {
            //       id:'4',
            //       name:'描述',
            //       value:'',
            //       inputType:'textarea',
            //       placeholder:'请输入描述',
            //       show:false,
            //   },
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
          content:this.$route.query.content || []
      }
    },
    created(){
        this.modifyData()
    },
    methods:{
        save(){
            let params = {
                value:this.typeList[0].value,
                code:this.typeList[1].value,
                menuTypeId:this.typeList[2].value,
                sort:Number(this.typeList[3].value)
            }
            //修改
            if (this.content) {
                params.id = this.content.id
            }
            this.$post(this.$api.dataDictionary.saveMc,params).then(res=>{
                let notice = this.$route.query.content?'修改':'新增';
                if (res.code === '000') {
                    this.$message({
                        message:`${notice}类型成功`,
                        type:'success'
                    })
                }else{
                    this.$message({
                        message:`${notice}类型失败`,
                        type:'error'
                    })
                }
                if (notice == '修改') {
                    this.$router.go(-1)
                }
            })
        },
        modifyData(){
            if (this.$route.query.content) {
                this.typeList[0].value = this.content.value;
                this.typeList[1].value = this.content.code;
                this.typeList[2].value = this.content.menuTypeId;
                this.typeList[3].value = this.content.sort;
                this.typeList[4].show = true;
                this.typeList[5].show = true;
            }
        }
    }
  }
</script>

<style lang='less' scoped>
.addSearchType{
    padding:50px;
    h3{
        border-left:6px solid rgba(187, 17, 26);
        color:#444;
        padding-left:20px;
        margin-bottom: 50px;
    }
    .searchItem{
        padding:10px 100px;
        overflow: hidden;
        .el-input,.el-select,.el-textarea{
            width:220px;
        }
        .el-textarea{
            max-height:100px;
        }
        .searchLabel{
            width:100px;
            float: left;
            text-align: right;
            margin-right:10px;
        }
        .searchValue{
            float: left;
        }
    }
    .saveBtn{
        width:490px;
        text-align: center;
        margin-top: 35px;
    }
}
</style>
