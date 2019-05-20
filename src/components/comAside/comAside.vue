<template>
    <div class="comAside" ref='comAside'>
        <el-menu default-active="0" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <!-- <el-menu-item index="0" v-for="it in navList" :key="it.id">
                <i :class="it.icon"></i>
                <router-link slot="title" exact tag="span" style="margin-left:14px" :to="it.path">{{it.name}}</router-link>
            </el-menu-item> -->
            <el-submenu :index="it.id.toString()" v-for="it in navList" :key="it.id">
                <template slot="title">
                    <i :class="it.icon"></i>
                    <span slot="title" style="margin-left:14px">{{it.name}}</span>
                     <!-- <router-link slot="title" exact tag="span" style="margin-left:14px" :to="it.path">{{it.name}}</router-link> -->
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="it.id+'-'+is.id"  v-for="is in it.children" :key="is.id">
                        <router-link slot="title" exact tag="span" :to="is.path">{{is.name}}</router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
      return {
          navList:[
              {
                  id:0,
                  path:'/information',
                  name:'通资讯管理',
                  icon:'el-icon-location',
                  children:[
                      {
                        id:0,
                        path:'/informationList',
                        name:'通资讯列表'
                      },
                      {
                        id:1,
                        path:'/publishInformation',
                        name:'发布通资讯'
                      }
                  ]
              },
              {
                  id:1,
                  path:'/bene',
                  name:'通惠政管理',
                  icon:'el-icon-menu',
                  children:[
                      {
                        id:0,
                        path:'/beneList',
                        name:'通惠政列表'
                      },
                      {
                        id:1,
                        path:'/publishBene',
                        name:'发布通惠政'
                      }
                  ]
              },
              {
                  id:2,
                  path:'/service',
                  name:'通服务管理',
                  icon:'el-icon-setting',
                  children:[
                      {
                        id:0,
                        path:'/serviceList',
                        name:'通服务列表'
                      },
                      {
                        id:1,
                        path:'/publishService',
                        name:'发布通服务'
                      }
                  ]
              },
              {
                  id:3,
                  path:'/navigation',
                  name:'通导航管理',
                  icon:'el-icon-share',
                  children:[
                      {
                        id:0,
                        path:'/navigationList',
                        name:'导航通列表'
                      },
                      {
                        id:1,
                        path:'/publishNavigation',
                        name:'发布通导航'
                      }
                  ]
              },
              {
                  id:4,
                  path:'/notice',
                  name:'通知公告管理',
                  icon:'el-icon-bell',
                  children:[
                      {
                        id:0,
                        path:'/noticeList',
                        name:'通知公告列表'
                      },
                      {
                        id:1,
                        path:'/publishNotice',
                        name:'发布通知公告'
                      }
                  ]
              },
              {
                  id:5,
                  path:'/dataDictionary',
                  name:'数据字典管理',
                  icon:'el-icon-tickets',
                  children:[
                      {
                        id:0,
                        path:'/navData',
                        name:'大导航维护'
                      },
                      {
                        id:1,
                        path:'/searchType',
                        name:'搜索类型维护'
                      },
                      {
                        id:2,
                        path:'/mapData',
                        name:'搜索类型维护'
                      }
                  ]
              },
              {
                  id:6,
                  path:'/user',
                  name:'用户信息管理',
                  icon:'el-icon-news'
              }
          ]
      };
    },
    computed:{
        isCollapse(){
            return this.$store.state.isCollapse
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    watch:{
        'isCollapse'(){
            if (this.isCollapse) {
                this.$refs.comAside.style.width = '64px'
            }else{
                this.$refs.comAside.style.width = '200px'
            }
        }
    }
}
</script>

<style lang='less' scoped>
.comAside{
    width:100%;
    height: 50px;
    line-height:50px;
}
</style>
