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
                     <router-link slot="title" exact tag="span" style="margin-left:14px" :to="it.path">{{it.name}}</router-link>
                </template>
                <el-menu-item-group>
                    <el-menu-item :index="it.id+'-'+is.id"  v-for="is in it.children" :key="is.id">{{is.name}}</el-menu-item>
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
                        path:'/publishInformation',
                        name:'发布资讯'
                      },
                      {
                        id:1,
                        path:'/modifyInformation',
                        name:'修改资讯'
                      },
                      {
                        id:2,
                        path:'/deleteInformation',
                        name:'删除资讯'
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
                        path:'/publishInformation',
                        name:'发布惠政'
                      },
                      {
                        id:1,
                        path:'/modifyInformation',
                        name:'修改惠政'
                      },
                      {
                        id:2,
                        path:'/deleteInformation',
                        name:'删除惠政'
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
                        path:'/publishInformation',
                        name:'发布服务'
                      },
                      {
                        id:1,
                        path:'/modifyInformation',
                        name:'修改服务'
                      },
                      {
                        id:2,
                        path:'/deleteInformation',
                        name:'删除服务'
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
                        path:'/publishInformation',
                        name:'发布导航'
                      },
                      {
                        id:1,
                        path:'/modifyInformation',
                        name:'修改导航'
                      },
                      {
                        id:2,
                        path:'/deleteInformation',
                        name:'删除导航'
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
                        path:'/publishInformation',
                        name:'发布通知公告'
                      },
                      {
                        id:1,
                        path:'/modifyInformation',
                        name:'修改通知公告'
                      },
                      {
                        id:2,
                        path:'/deleteInformation',
                        name:'删除通知公告'
                      }
                  ]
              },
              {
                  id:5,
                  path:'/dataDictionary',
                  name:'数据字典管理',
                  icon:'el-icon-tickets'
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
