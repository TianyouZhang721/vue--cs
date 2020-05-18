<template>
    <div class="container">
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <router-link to="/home/index" tag="div">
                <i class="iconfont icon-shouye1"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/home/classify" tag="div">
                <i class="iconfont icon-fenlei-"></i>
                <p>分类</p>
            </router-link>
            <router-link to="/home/cart" tag="div">
                <i class="iconfont icon-gouwuche"></i>
                <p>购物车</p>
            </router-link>
            <router-link to="/home/my" tag="div">
                <i class="iconfont icon-wode"></i>
                <p>我的</p>
            </router-link>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="stylus" scoped>
.container 
    width 100%
    height 100%
    display flex
    flex-direction column
    main 
        flex 1
    footer 
        height px2rem(100px)
        background-color #feffff
        border-top px2rem(1px) solid #edeeef
        display flex
        align-items center
        div 
            flex 1
            text-align center
            &.router-link-active 
                color color
            i 
                font-size px2rem(36px)
</style>