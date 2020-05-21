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
import Admin from '@/pages/admin/admin'
import AdminHome from '@/pages/admin/home'
import AdminUser from '@/pages/admin/adminuser'
import Member from '@/pages/admin/member'
import ProductManage from '@/pages/admin/productmanage'
import ClassifyManage from '@/pages/admin/classifymanage'
import AdminLogin from '@/pages/admin/adminlogin'
Vue.use(Router)

export default new Router({
  routes: [
    // 手机端的
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
    },
    // pc端路由
    {
      path: "/admin",
      component: Admin,
      beforeEnter(to, from, next) {
        if (sessionStorage.getItem("adminid")) {
          
          next()
        } else {
          next("/adminlogin")
        }
      },
      children: [
        {
          path: "home",
          component: AdminHome
        },
        {
          path: "adminuser",
          component: AdminUser
        },
        {
          path: "member",
          component: Member
        },
        {
          path: "classifymanage",
          component: ClassifyManage
        },
        {
          path: "productmanage",
          component: ProductManage
        }
      ]
    },
    {
      path: "/adminlogin",
      component: AdminLogin
    }
  ]
})
