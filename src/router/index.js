import Vue from 'vue'
import Router from 'vue-router'
import Lander from '@/components/Lander/Lander'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lander',
      component: Lander
    }
  ]
})
