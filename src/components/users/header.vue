<template>
    <header>
        <div class="search-box">
            <input type="text">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </header>
</template>

<script>
    export default {
        
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
</style>