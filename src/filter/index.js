import Vue from 'vue'
Vue.filter("status", function(status) {
    if (status || status == 1) {
        return '启用'
    } else {
        return '禁用'
    }
})
