import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [  
     {
      path: '/',
      name: 'TodoList',
      component: TodoList
    }
    ,{
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
