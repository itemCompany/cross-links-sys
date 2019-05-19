<template>
    <div class="entry">
        <com-header></com-header>
        <div class="entryMain" ref="entryMain">
            <com-aside class="entryMainLeft"></com-aside>
            <div class="entryMainRight" ref="entryMainRight">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import comHeader from '@/components/comHeader/comHeader.vue'
import comAside from '@/components/comAside/comAside.vue'
  export default {
    name:'app',
    components:{
        comHeader,
        comAside
    },
    data() {
      return {
      };
    },
    computed:{
        isCollapse(){
            return this.$store.state.isCollapse
        }
    },
    created(){
        
    },
    mounted(){
        this.$nextTick(function(){
            let height = window.screen.availHeight - 50;
            this.$refs.entryMain.style.height = height+'px'
        })
    },
    methods: {
    },
    watch:{
        'isCollapse'(){
            if (!this.isCollapse) {
                this.$refs.entryMainRight.style.marginLeft = '220px'
            }else{
                this.$refs.entryMainRight.style.marginLeft = '84px'
            }
        }
    }
  }
</script>
<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.entryMain{
    overflow: hidden;
    background: #f2f2f2;
    .entryMainLeft{
        width:200px;
        height:100%;
        float: left;
    }
    .entryMainRight{
        height:100%;
        background: #fff;
        margin:20px;
    }
}
</style>