import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ind: 0, // 分类需要的下标
        show: false, // 控制弹出层的显示和隐藏
    },
    mutations: {
        changeInd(state, i) {
            state.ind = i
        },
        changeShow(state, bool) {
            state.show = bool
        }
    }
})