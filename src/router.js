import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index.vue'),
            redirect:'/informationList',
            children:[
                //资讯
                {
                    path: '/informationList',
                    name: 'informationList',
                    component: () => import('@/pages/information/informationList.vue')
                },
                {
                    path: '/publishInformation',
                    name: 'publishInformation',
                    component: () => import('@/pages/information/publishInformation.vue')
                },
                //惠政
                {
                    path: '/beneList',
                    name: 'beneList',
                    component: () => import('@/pages/bene/beneList.vue')
                },
                {
                    path: '/publishBene',
                    name: 'publishBene',
                    component: () => import('@/pages/bene/publishBene.vue')
                },
                //服务
                {
                    path: '/serviceList',
                    name: 'serviceList',
                    component: () => import('@/pages/service/serviceList.vue')
                },
                {
                    path: '/publishService',
                    name: 'publishService',
                    component: () => import('@/pages/service/publishService.vue')
                },
                //导航
                {
                    path: '/navigationList',
                    name: 'navigationList',
                    component: () => import('@/pages/navigation/navigationList.vue')
                },
                {
                    path: '/publishNavigation',
                    name: 'publishNavigation',
                    component: () => import('@/pages/navigation/publishNavigation.vue')
                },
                //通知公告
                {
                    path: '/noticeList',
                    name: 'noticeList',
                    component: () => import('@/pages/notice/noticeList.vue')
                },
                {
                    path: '/publishNotice',
                    name: 'publishNotice',
                    component: () => import('@/pages/notice/publishNotice.vue')
                },
                //数据字典
                {
                    path: '/mapData',
                    name: 'mapData',
                    component: () => import('@/pages/dataDictionary/mapData.vue')
                },
                {
                    path: '/searchType',
                    name: 'searchType',
                    component: () => import('@/pages/dataDictionary/searchType.vue')
                },
                {
                    path: '/navData',
                    name: 'navData',
                    component: () => import('@/pages/dataDictionary/navData.vue')
                },
                //用户管理
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('@/pages/user/user.vue')
                }
            ]
        },
    ]
})
