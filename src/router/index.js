import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstworld from '@/components/firstworld'

Vue.use(Router)

export default new Router({
  routes: [  
     {
      path: '/',
      name: 'firstworld',
      component: firstworld
    }
    ,{
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
