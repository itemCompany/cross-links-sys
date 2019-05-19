import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/About.vue')
    // }
export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/pages/index.vue'),
            redirect:'/information',
            children:[
                {
                    path: '/information',
                    name: 'information',
                    component: () => import('@/pages/information/information.vue')
                },
                {
                    path: '/bene',
                    name: 'bene',
                    component: () => import('@/pages/bene/bene.vue')
                },
                {
                    path: '/service',
                    name: 'service',
                    component: () => import('@/pages/service/service.vue')
                },
                {
                    path: '/navigation',
                    name: 'navigation',
                    component: () => import('@/pages/navigation/navigation.vue')
                },
                {
                    path: '/notice',
                    name: 'notice',
                    component: () => import('@/pages/notice/notice.vue')
                },
                {
                    path: '/dataDictionary',
                    name: 'dataDictionary',
                    component: () => import('@/pages/dataDictionary/dataDictionary.vue')
                },
                {
                    path: '/user',
                    name: 'user',
                    component: () => import('@/pages/user/user.vue')
                }
            ]
        },
    ]
})
