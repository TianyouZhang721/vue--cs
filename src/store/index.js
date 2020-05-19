import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ind: 0, // 分类需要的下标
    },
    mutations: {
        changeInd(state, i) {
            state.ind = i
        }
    }
})