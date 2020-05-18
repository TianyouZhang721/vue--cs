import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/users/home/home"
import Detail from "@/pages/users/detail/detail"
import Login from "@/pages/users/login/login"
import Register from "@/pages/users/register/register"
import Index from '@/pages/users/home/index'
import Classify from '@/pages/users/home/classify'
import Cart from '@/pages/users/home/cart'
import My from '@/pages/users/home/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "index",
          component: Index
        },
        {
          path: "classify",
          component: Classify
        },
        {
          path: "cart",
          component: Cart
        },
        {
          path: "my",
          component: My
        }
      ]
    },
    {
      path: "/detail",
      component: Detail
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/register",
      component: Register
    }
  ]
})
