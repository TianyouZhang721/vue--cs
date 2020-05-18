<template>
    <div class="classify">
        <Header></Header>
        <main>
            <ClassifyLeft />
            <ClassifyRight></ClassifyRight>
        </main>
    </div>
</template>

<script>
    import Header from '@/components/users/header'
    import ClassifyLeft from '@/components/users/classifyleft'
    import ClassifyRight from '@/components/users/classifyright'
    export default {
        components: {
            Header,
            ClassifyLeft,
            ClassifyRight
        }
    }
</script>

<style lang="stylus" scoped>
.classify 
    display flex 
    flex-direction column
    width 100%
    height 100%
    main 
        flex 1
        overflow hidden
        display flex
        justify-content space-between
</style>