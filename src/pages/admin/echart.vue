<template>
    <div id="echarts-box" ref="box">

    </div>
</template>

<script>
    import echarts from 'echarts'
    console.log(echarts)
    export default {
        mounted() {
            this.$http.get("/api/goodslist").then(res => {
                console.log(res)
                var titleArr = res.data.data.map(item => {
                    return item.title
                })
                var priceArr = res.data.data.map(item => {
                    return item.price
                })
                let echart = echarts.init(this.$refs.box)
                var option ={
                    title: {
                        text: "商品价格对照表"
                    },
                    legend: {
                        data: ["价格"]
                    },
                    xAxis: {
                        data: titleArr
                    },
                    yAxis: {},
                    series: [
                        {
                            type: "bar",
                            name: "价格",
                            data: priceArr
                        }
                    ],
                    tooltip: {}
                }
                echart.setOption(option)
            })
        }
    }
</script>

<style lang="stylus" scoped>
#echarts-box 
    width 100%
    height 100%
</style>