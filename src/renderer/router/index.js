import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login_page',
      component: require('@/pages/auth/Login.vue').default
    },
    {
      path: '/forgotpass',
      name: 'forgot_pass',
      component: require('@/pages/auth/ForgotPass.vue').default
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: require('@/pages/main/MainPage.vue').default
    },
    {
      path: '/option',
      name: 'option',
      component: require('@/pages/tool/option.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
