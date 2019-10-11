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
      path: '/create_account',
      name: 'create_account',
      component: require('@/pages/auth/CreateAccount.vue').default
    },
    {
      path: '/select_map',
      name: 'select_map',
      component: require('@/pages/auth/SelectMap.vue').default
    },
    {
      path: '/forgotpass',
      name: 'forgot_pass',
      component: require('@/pages/auth/ForgotPass.vue').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
