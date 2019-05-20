<template>
    <div class="addSearchType">
       <div>
            <div v-for="it in typeList" :key="it.id">
                <p>{{it.name}}</p>
                <div>
                    <el-input v-if="it.inputType === 'text'" v-model="it.value"></el-input>
                    <el-date-picker
                        v-if="it.inputType === 'date'" 
                        v-model="it.value"
                        type="datetime"
                        placeholder="选择日期时间">
                    </el-date-picker>
                    <el-radio-group v-model="it.value" v-if="it.inputType === 'radio'">
                        <el-radio v-for="is in it.children" :key="is.id" :label="is.value">{{is.label}}</el-radio>
                    </el-radio-group>
                    <el-input v-if="it.inputType === 'textarea'" type="textarea" v-model="it.value"></el-input>
                </div>
            </div>
       </div>
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
                  inputType:'text'
              },
              {
                  id:'1',
                  name:'类型code',
                  value:'',
                  inputType:'text'
              },
              {
                  id:'2',
                  name:'创建时间',
                  value:'',
                  inputType:'date'
              },
              {
                  id:'3',
                  name:'修改时间',
                  value:'',
                  inputType:'date'
              },
              {
                  id:'4',
                  name:'是否启用',
                  value:'',
                  inputType:'radio',
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
              },
              {
                  id:'5',
                  name:'描述',
                  value:'',
                  inputType:'textarea'
              },
          ]
      };
    },
  }
</script>

<style lang='less' scoped>
.addSearchType{
}
</style>
