<template>
    <div class="left">
        <ul>
            <li 
            v-for="(item,index) in classifyList" 
            :key="item._id"
            :class="{'active': index == ind}"
            @click="changeTab(index)"
            >
                {{ item.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                classifyList: [],
                ind: 0
            }
        },
        methods: {
            changeTab(i) {
                this.ind = i
            }
        },
        mounted() {
            this.$http.get("/api/catelist").then(res => {
                console.log(res)
                this.classifyList = res.data.data
            })
        },
    }
</script>

<style lang="stylus" scoped>
.left 
    width px2rem(236px)
    height 100%
    background-color #f9fafb
    li 
        width 100%
        height px2rem(88px)
        line-height px2rem(88px)
        text-align center
        &.active 
            background-color #fff
            color color
            border-left px2rem(10px) solid color3
</style>