<template>
    <div>
        <van-popup v-model="show" position="bottom">
            <main>
                <div class="product-detail">
                <div class="img-box">
                    <img :src="'http://localhost:3000' + detail.imgurl" alt="">
                </div>
                <div class="price-box">
                    <p>￥{{ detail.price }}</p>
                    <p>库存123456</p>
                    <p>请选择商品属性</p>
                </div>
            </div>
            <div class="count-box">
                <p>购买数量</p>
                <div>
                    <div @click="jian">-</div>
                    <span>{{ count }}</span>
                    <div @click="jia">+</div>
                </div>
            </div>
            <div class="size">
                <p>大小</p>
                <div>
                    <span 
                    v-for="(item, index) in sizeArr" 
                    :key="index" 
                    :class="{'active': item == size}"
                    @click="changeSize(item)"
                    >{{item}}</span>
                </div>
            </div>
            <div class="color">
                <p>颜色</p>
                <div>
                    <span v-for="(item, i) in  colorArr" :key="i" :class="{'active': item == color}" @click="changeColor(item)">土豪金</span>

                </div>
            </div>
            </main>
            <footer>
                <div class="total-price">
                    总价：￥{{detail.price * count}}
                </div>
                <div class="btns">
                    <div class="addCart" @click="addCart">加入购物车</div>
                    <div class="buy">立即购买</div>
                </div>
            </footer>
        </van-popup>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
    export default {
        data() {
            return {
                count: 1,
                sizeArr:[5.4,4.7,6.1],
                colorArr: ["土豪金", "玫瑰金","渣渣辉"],
                size: "",
                color: ""
            }
        },
        computed: {
            show: {
                get() {
                    return this.$store.state.show
                },
                set() {
                    this.$store.commit("changeShow", false)
                }
                
            }
        },
        props: ["detail"],
        methods: {
            changeSize(item) {
                this.size = item
            },
            changeColor(item) {
                this.color = item
            },
            jian() {
                if(this.count == 1) return
                this.count--
            },
            jia() {
                this.count++
            },
            addCart() {
                // 先判断是否为登录状态
                if (!sessionStorage.getItem("id")) {
                    Toast.fail('请先登录，一秒后会自动跳到登录页');
                    setTimeout(() => {
                        this.$router.push("/login")
                    }, 1000)
                    return
                }
                // 在判断规则是否有选中
                if(!this.size || !this.color) {
                    Toast.fail('请选择商品规格');
                    return 
                }
                this.$http.post("/api/cartadd", {
                    userid: sessionStorage.getItem("id"),
                    goodsid: this.detail._id,
                    goods_num: this.count
                }).then(res => {
                    if (res.data.status == 1) {
                        this.$store.dispatch("getCartList")
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.van-popup 
    width 100%
    height px2rem(670px)
    overflow-y visible
    display flex
    flex-direction column
    main 
        flex 1
    .product-detail
        position relative
        z-index 9999
        .img-box 
            position absolute 
            top px2rem(-20px)
            left px2rem(20px)
            width px2rem(200px)
            height px2rem(200px)
            z-index 9999
            img 
                width 100%
                height 100%
        .price-box 
            padding-left px2rem(240px)
            padding-top px2rem(10px)
    .count-box 
        display flex
        justify-content space-between
        padding 0 px2rem(20px)
        margin-top px2rem(60px)
        >div 
            display flex
            >div
                width px2rem(50px)
                height px2rem(50px)
                background-color #98999a
                text-align center
                color #fff
                font-size px2rem(36px)
            span 
                width px2rem(90px)
                height px2rem(50px)
                border px2rem(1px) solid #98999a
                text-align center
                line-height px2rem(50px)
    .size
        padding 0 px2rem(20px)
        width 100%
        margin-bottom px2rem(20px)
        div 
            display flex
            span
                padding px2rem(6px) px2rem(34px)
                background-color #dcddde
                color #666
                margin-right px2rem(10px)
                border-radius px2rem(10px)
                &.active 
                    background-color color 
                    color #fff
    .color
        padding 0 px2rem(20px)
        width 100%
        div 
            display flex
            span
                padding px2rem(6px) px2rem(34px)
                background-color #dcddde
                color #666
                margin-right px2rem(10px)
                border-radius px2rem(10px)
                &.active 
                    background-color color 
                    color #fff
    footer 
        height px2rem(100px)
        display flex
        >div
            flex 1
            display flex
            justify-content center
            line-height px2rem(100px)
            .addCart 
                flex 1
                background-color color
                text-align center
                color #fff
            .buy 
                flex 1
                background-color color2
                text-align center
                color #fff
</style>
