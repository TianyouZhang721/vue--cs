import Vue from 'vue'
Vue.filter("status", function(status) {
    if (status) {
        return '启用'
    } else {
        return '禁用'
    }
})
