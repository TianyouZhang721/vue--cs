<template>
    <div class="home-container">
        <div class="banner">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in banners" :key="item._id">
                        <img :src="'http://localhost:3000' + item.imgurl" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="list">
            <ul>
                <li v-for="(item, index) in searchList" :key="item._id">
                    <div class="img-box">
                        <img :src="'http://localhost:3000' + item.imgurl" alt="">
                    </div>
                    <p>￥ {{ item.price }}</p>
                    <p>{{ item.title }}</p>
                </li>
            </ul>
        </div>
        <div class="search-box">
            <input type="text" @input="search" v-model="keywords">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </div>
</template>

<script>
    // swiper
    // 1. npm i swiper --save
    // 2. 需要使用轮播图的组件内  import Swiper from 'swiper'
    // 3. main.js   import "swiper/css/swiper.css"
    // 4. mounted() {
        // new Swiper(".swiper-container", {
            // autoplay: {
            //     delay: 3000
            // },
            // loop: true
        // })
    // }
    import Swiper from 'swiper'
    export default {
        data() {
            return {
                banners: [],
                keywords: "",
                searchList: []
            }
        },
        mounted() {
            this.$http.get("/api/bannerlist").then(res => {
                console.log(res)
                // 数据的获取
                this.banners = res.data.data
                // 渲染页面
                // new Swiper("生成轮播图的容器", {})
                this.$nextTick(() => {
                    // 这个函数的内部代码是保证页面渲染完成后才运行
                    new Swiper(".swiper-container", {
                        autoplay: {
                            delay: 3000
                        },
                        loop: true
                    })
                })
                

            })
        },
        methods: {
            search() {
                if (!this.keywords) {
                    return
                }
                this.$http.get("/api/goodssearch?keywords=" + this.keywords).then(res => {
                    console.log(res)
                    this.searchList = res.data.info
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
.home-container 
    display flex
    flex-direction column
    width 100%
    height 100%
.banner 
    width 100%
    height px2rem(470px)
    .swiper-container
        width 100%
        height 100%
        .swiper-slide
            width 100%
            height 100%
            img 
                width 100%
                height 100%
.search-box 
    width px2rem(500px)
    height px2rem(60px)
    position fixed
    left 50%
    transform translateX(-50%)
    top px2rem(20px)
    z-index 99
    input 
        width 100%
        height 100%
        opacity .5
        border-radius px2rem(10px)
    i 
        position absolute 
        right px2rem(30px)
        top 50%
        transform translateY(-50%)
        font-size px2rem(50px)
.list 
    flex 1
    background-color #f9fafb
    ul 
        display flex
        flex-wrap wrap
        justify-content space-between
        padding px2rem(20px)
        li 
            width px2rem(328px)
            height px2rem(426px)
            border px2rem(1px) solid #eee
            background #fff
            .img-box 
                width px2rem(186px)
                height px2rem(286px)
                margin 0 auto
                img 
                    width 100%
                    height 100%
            p 
                padding-left px2rem(20px)
                margin-top px2rem(10px)
</style>
