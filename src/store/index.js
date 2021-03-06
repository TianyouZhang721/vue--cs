import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ind: 0, // 分类需要的下标
        show: false, // 控制弹出层的显示和隐藏
        cartList: [], // 购物车数组
    },
    mutations: {
        changeInd(state, i) {
            state.ind = i
        },
        changeShow(state, bool) {
            state.show = bool
        },
        getCartList(state, arr) {
            state.cartList = arr
        }
    },
    actions: {
        // 调用购物车接口
        getCartList(context) {
            let id = sessionStorage.getItem("id")
            axios.get("/api/cartlist?userid=" + id).then(res => {
                console.log(res)
                context.commit("getCartList", res.data.data)
            })
        },
        // 修改购物车接口
        changeCartList(context, obj) {
            axios.post("/api/cartedit", {
                userid: sessionStorage.getItem("id"),
                goodsid: obj.goodsid,
                checked: obj.checked,
                type: obj.type
            }).then(res => {
                console.log(res)
                if (res.data.status == 1) {
                    context.dispatch("getCartList")
                }
            })
        },
        delCart(context, id) {
            axios.post("/api/cartdel", {
                id: id
            }).then(res => {
                console.log(res)
                if (res.data.status == 1) {
                    context.dispatch("getCartList")
                }
            })
        }
    }
})