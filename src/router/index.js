import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EmployeeDetail from '@/components/EmployeeDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/employee/:id',
      name: 'EmployeeDetail',
      component:EmployeeDetail
    }
  ]
})
