<template>
    <header>
        <div class="search-box" v-if="title == '分类'">
            <input type="text">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <div class="login-header" v-if="title == '登录'">
            <i class="iconfont icon-houtui"></i>
            <span>登录</span>
            <span>注册</span>
        </div>
        <div class="login-header" v-if="title == '注册'">
            <i class="iconfont icon-houtui"></i>
            <span>注册</span>
            <span>登录</span>
        </div>
        <div class="cart-header" v-if="title == '购物车'">
            <i class="iconfont icon-houtui"></i>
            <span>购物车</span>
            <span></span>
        </div>
    </header>
</template>

<script>
    export default {
        props: ["title"]
    }
</script>

<style lang="stylus" scoped>
header 
    background-color color
    width 100%
    height px2rem(88px)
    position relative
.search-box 
    width px2rem(500px)
    height px2rem(60px)
    position absolute
    left 50%
    transform translate(-50%, -50%)
    top 50%
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

.login-header 
    display flex
    justify-content space-between;
    line-height px2rem(88px)
    color #fff
    padding 0 px2rem(20px)

.cart-header 
    display flex
    justify-content space-between;
    line-height px2rem(88px)
    color #fff
    padding 0 px2rem(20px)
</style>