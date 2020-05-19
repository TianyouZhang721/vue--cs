<template>
    <div>
        <Header :title="'登录'"></Header>
        <main>
            <van-field v-model="username" placeholder="请输入用户名" />
            <van-field v-model="password" placeholder="请输入密码" />
            <van-button type="primary" @click="login">登录</van-button>
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
            login() {
                this.$http.post("/api/memberlogin", {
                    username: this.username,
                    password: this.password
                }).then(res => {
                    console.log(res)
                    if(res.data.status == 1) {
                        sessionStorage.setItem("id", res.data.data._id)
                        this.$router.back()
                    }
                })
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>