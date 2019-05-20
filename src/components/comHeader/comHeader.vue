<template>
    <div class="comHeader">
        <el-radio-group v-model="isCollapse">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          isCollapse:false
      };
    },
    created(){
       this.$store.commit('getIsCollapse',{isCollapse:this.isCollapse})
    },
    methods: {
    },
    watch:{
        isCollapse(){
            this.$store.commit('getIsCollapse',{isCollapse:this.isCollapse})
        }
    }
  }
</script>

<style lang='less' scoped>
.comHeader{
    overflow: hidden;
    width:100%;
    height: 50px;
    line-height:50px;
    background: #409EFF;
}
</style>
