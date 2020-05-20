<template>
    <div class="cart">
        <Header :title="'购物车'"></Header>
        <main>
            <section>
                <ul>
                    <li v-for="(item, index) in cartList" :key="item._id">
                        <i 
                        :class="['iconfont icon-quanxuan', item.checked?'active':'']"
                        @click="checkOne(item)"
                        ></i>
                        <div class="img-box"></div>
                        <div class="detail">
                            <p>{{ item.goods_title }}</p>
                            <div class="count-box">
                                <div>-</div>
                                <div>{{ item.goods_num }}</div>
                                <div>+</div>
                            </div>
                        </div>
                        <p>{{ item.goods_price}}</p>
                    </li>
                </ul>
            </section>
            <footer>
                <i class="iconfont icon-quanxuan"></i>
                <p>合计：￥</p>
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
            }
        },
        methods: {
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
    main 
        flex 1
        display flex
        flex-direction column
        section 
            flex 1
            li 
                display flex
                height px2rem(160px)
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
            div 
                background-color color
                color #fff
</style>