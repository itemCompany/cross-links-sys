import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
            isCollapse: true
    },
    mutations: {
        getIsCollapse(state,pload){
            state.isCollapse = pload.isCollapse
        }
    },
    actions: {

    }
})
