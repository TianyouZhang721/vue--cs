<template>
    <div class="right">
        <ul v-if="list && list.length > 0">
            <li v-for="(item,index) in list[ind].children" :key="index">
                <div class="box">
                    <div class="img-box">
                        <img :src="'http://localhost:3000' + item.imgurl" alt="">
                    </div>
                </div>
                <p> {{ item.title }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            this.$http.get("/api/categoods").then(res => {
                console.log(res)
                this.list = res.data.data
            })
        },
        computed: {
            ind() {
                return this.$store.state.ind
            }
        },
    }
</script>

<style lang="stylus" scoped>
.right 
    height 100%
    width px2rem(490px)
    padding-right  px2rem(20px)
    padding-top px2rem(20px)
    ul 
        display flex 
        flex-wrap wrap
        justify-content space-between
        li 
            width px2rem(226px)
            height px2rem(236px)
            display flex
            flex-direction column
            border px2rem(2px) solid color3
            .box 
                height px2rem(184px)
            p 
                flex 1
                background-color color3
                text-align center
                color #fff
            .img-box 
                width px2rem(150px)
                height px2rem(150px)
                margin 0 auto
                margin-top px2rem(10px)
                img 
                    width 100%
                    height 100%
</style>