<template>
    <div class="cart">
        <Header :title="'购物车'"></Header>
        <main>
            <section>
                <ul>
                    <li v-for="(item, index) in cartList" :key="item._id" v-swipe>
                        <i 
                        :class="['iconfont icon-quanxuan', item.checked?'active':'']"
                        @click="checkOne(item)"
                        ></i>
                        <div class="img-box"></div>
                        <div class="detail">
                            <p>{{ item.goods_title }}</p>
                            <div class="count-box">
                                <div @click="jian(item)">-</div>
                                <div>{{ item.goods_num }}</div>
                                <div @click="jia(item)">+</div>
                            </div>
                        </div>
                        <p>{{ item.goods_price * item.goods_num}}</p>
                        <div class="del" @click="del(item)">删除</div>
                    </li>
                </ul>
            </section>
            <footer>
                <i :class="['iconfont icon-quanxuan', checkAll?'active':'']" @click="changeAll"></i>
                <p>合计：￥{{ totalPrice }}</p>
                <div>去结算</div>
            </footer>
        </main>
    </div>
</template>

<script>
    import Header from '@/components/users/header'
    export default {
        components: {
            Header
        },
        mounted() {
            this.$store.dispatch("getCartList")
        },
        computed: {
            cartList() {
                return this.$store.state.cartList
            },
            checkAll: {
                get() {
                    if (this.cartList.length == 0) {
                        return false
                    }
                    // 获取一个bool值
                    // true 或 false  取决于 购物车数组内每个商品的checked是否都为true
                    let bool = this.cartList.every(item => {
                        return item.checked == true
                    })
                    console.log(bool)
                    return bool
                },
                set(newVal) {
                    // 主动点击全选，所有商品都选中或都不选中， 视觉上实现，如果全选没有，那点一下，上面都选中
                    this.cartList.forEach((item) => {
                        item.checked = newVal
                    })
                }
            },
            totalPrice() {
                let sum = 0;
                this.cartList.forEach(item => {
                    if (item.checked == true) {
                        sum+=item.goods_price*item.goods_num
                    }
                })
                return sum
            }
        },
        methods: {
            jian(item) {
                this.$store.dispatch("changeCartList", {
                    goodsid: item.goodsid,
                    checked: item.checked,
                    type: 2
                })
            },
            jia(item) {
                this.$store.dispatch("changeCartList", {
                    goodsid: item.goodsid,
                    checked: item.checked,
                    type: 1
                })
            },
            // 点击全选
            changeAll() {
                // 假如此时checkAll 为 true，那则添加了active类
                this.checkAll = !this.checkAll
                // 计算属性的更改会触发set
            },
            checkOne(item) {
                console.log(item)
                // 反推
                // 最终什么效果？颜色变为原本的颜色
                // 谁影响颜色的变化 item.checked
                // 需要调用修改购物车的接口
                this.$store.dispatch("changeCartList", {
                    goodsid: item.goodsid,
                    checked: !item.checked
                })
            },
            del(item) {
                this.$store.dispatch("delCart",item._id )
            }
        }
    }
</script>

<style lang="stylus" scoped>
.cart 
    width 100%
    height 100%
    display flex
    flex-direction column
    overflow hidden
    main 
        flex 1
        display flex
        flex-direction column
        section 
            flex 1
            li 
                display flex
                height px2rem(160px)
                position relative
                .del 
                    width px2rem(90px)
                    background color
                    position absolute
                    right px2rem(-90px)
                    height 100%
                    display flex
                    align-items center
                    justify-content center
                    color #fff
                i 
                    width px2rem(80px)
                    line-height px2rem(160px)
                    text-align center
                    font-size px2rem(50px)
                    &.active
                        color color

                .img-box 
                    width px2rem(150px)
                    height px2rem(150px)
                    background #eee
                .detail 
                    width px2rem(396px)
                    display flex
                    flex-direction column
                    justify-content space-between
                    padding px2rem(15px) 0
                    padding-left px2rem(20px)
                    .count-box 
                        display flex
                        >div 
                            width px2rem(70px)
                            height px2rem(40px);
                            border px2rem(1px) solid #999
                            text-align center
                >p 
                    flex 1
                    line-height px2rem(160px)

        footer  
            height px2rem(100px)
            display flex
            text-align center
            line-height px2rem(100px)
            i, p, div
                flex 1
            i 
                font-size px2rem(50px)
                &.active
                    color color
            div 
                background-color color
                color #fff
</style>