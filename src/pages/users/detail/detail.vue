<template>
    <div class="detail">
        <main>
            <div class="img">
                <img :src="'http://localhost:3000' + detail.imgurl" alt="">
            </div>
            <div class="product-title">
                <div class="title">
                    <p>{{ detail.title }}</p>
                </div>
                <div class="like">
                    <i class="iconfont icon-quanxuan"></i>
                    <p>收藏</p>
                </div>
            </div>
            <div class="product-price">
                <div class="price">
                    <p class="new-price">{{ detail.price }}</p>
                    <p class="old-price">
                        <del>￥111</del>
                    </p>
                </div>
                <div class="tags">
                    <div class="tag-top">
                        <span>6.5折</span>
                        <span>包邮</span>
                    </div>
                    <div class="tag-bottom">
                        <span>正品货源</span>
                        <span>一件代发</span>
                        <span>全球直邮</span>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <div class="total-price">
                总价：￥
            </div>
            <div class="btns">
                <div class="addCart" @click="addCart">加入购物车</div>
                <div class="buy">立即购买</div>
            </div>
        </footer>
        <Prop></Prop>
    </div>
</template>

<script>
    import Prop from '@/components/users/propup'
    export default {
        components: {
            Prop
        },
        data() {
            return {
                detail: {},
                // show: false
            }
        },
        mounted() {
            console.log(this.$route)
            let id = this.$route.query.id
            this.$http.get("/api/goodsinfo?id=" + id).then(res => {
                console.log(res)
                this.detail = res.data.data
            })
        },
        methods: {
            addCart() {
                this.$store.commit("changeShow", true)
            }
        }
    }
</script>

<style lang="stylus" scoped>
.detail 
    width 100%
    height 100%
    display flex
    flex-direction column
    main 
        flex 1
        .img 
            width 100%
            height px2rem(526px)
            img 
                width 100%
                height 100%
        .product-title 
            width 100%
            height px2rem(80px)
            display flex
            padding 0 px2rem(20px)
            .title 
                width px2rem(618px)
            .like   
                flex 1
                border-left px2rem(1px) solid #999
                color color2
                text-align center
        .product-price 
            display flex
            padding 0 px2rem(20px)
            .price 
                width px2rem(170px)
                height px2rem(80px)
            .tags 
                flex 1
                .tag-top
                    margin-bottom px2rem(10px)
                    >span 
                        padding px2rem(2px) px2rem(4px)
                        background-color color
                        color #fff
                .tag-bottom
                    >span 
                        padding px2rem(2px) px2rem(4px)
                        background-color #fff
                        color color
                        border px2rem(1px) solid color
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