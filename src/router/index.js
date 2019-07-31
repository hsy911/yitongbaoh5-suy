import Vue from 'vue'
import Router from 'vue-router'
import yearlyInspectionHome from '@/components/yearlyInspection/home/home'
import yearlyInspectionAddBars from '@/components/yearlyInspection/addBars/addBars'
import finesPaymentIndex from '@/components/finesPayment/index/Index'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      component:finesPaymentIndex,
      meta:{title:'罚单'}
    }, 
    {
      path:'/finesPaymentIndex',
      component:finesPaymentIndex,
      meta:{title:'罚单'}
    },
    // {
    //   path: '/',
    //   name: 'yearlyInspectionHome',
    //   component: yearlyInspectionHome,
    //   meta: { title: '年检' }
    // },
    {
      path: '/yearlyInspectionHome',
      component: yearlyInspectionHome,
      name: 'yearlyInspectionHome',
      meta: { title: '年检' }
    },
    {
      path: '/yearlyInspectionAddBars',
      component: yearlyInspectionAddBars,
      name: 'yearlyInspectionAddBars',
      meta: { title: '添加车辆' }
    }
  ]
})
