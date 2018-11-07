import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Kind from '@/components/Kind'
import Cart from '@/components/Cart'
import User from '@/pages/mine/User'
import Header from '@/components/Header'
import MainFooter from '@/components/MainFooter'
import Login from '@/pages/mine/Login'
import Register from '@/components/Register'
import Detailspage from '@/components/Detailspage'
import Exit from '@/pages/mine/Exit';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: Header,
        content: Home,
        footer: MainFooter
      }
    },
    {
      path: '/home',
      name: 'home',
      components: {
        header: Header,
        content: Home,
        footer: MainFooter
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        header: Header,
        content: Kind,
        footer: MainFooter
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        header: Header,
        content: Cart
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        content: User,
        footer: MainFooter
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        content: Login
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        header: Header,
        content: Register
      }
    },
    {
      path: '/detailspage/:id',
      name: 'detailspage',
      components: {
        content: Detailspage
      }
    },
    {
      path:'/exit',
      name:'exit',
      components:{
        content: Exit
      },
      //路由独享守卫
      beforeEnter(to,from,next){
        //如果用户已经登录，进入退出页面
        if(store.state.userInfo.name){
          next()
        //如果用户没有登录，君如登录页面
        }else{
          next({path:'/login'})
        }
      }
    }
  ]
})
