 import { createRouter, createWebHashHistory } from 'vue-router'
// import Vue from 'vue'
//import VueRouter from 'vue-router'

import Index from '@/components/Index.vue'
// import Discover from '@/views/discover/Discover.vue'

// Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    redirect: '/discover',
    component: Index,
    // children: [
    //   {
    //   path: '/discover',
    //   component: Discover,
    //   }
    // ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
