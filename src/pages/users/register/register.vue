<template>
    <div>
        <Header :title="'注册'"></Header>
        <main>
            <van-field v-model="username" placeholder="请输入用户名" />
            <van-field v-model="password" placeholder="请输入密码" />
            <van-button type="primary" @click="register">注册</van-button>
        </main>
    </div>
</template>

<script>
    import Header from '@/components/users/header'
    export default {
        components: {
            Header
        },
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            register() {
                this.$http.post("/api/memberadd", {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>
main 
    padding 0 px2rem(100px)
    padding-top px2rem(200px)
    .van-cell
        padding px2rem(30px) 0
        .van-field__body 
            height 100%
    .van-button
        width 100%
        background-color color
        border none
        outline none
        margin-top px2rem(30px)
</style>