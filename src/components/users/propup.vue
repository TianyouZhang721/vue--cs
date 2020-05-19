<template>
    <div>
        <van-popup v-model="show" position="bottom">
            
        </van-popup>
    </div>
</template>

<script>
    export default {
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
    }
</script>

<style lang="stylus" scoped>

</style>