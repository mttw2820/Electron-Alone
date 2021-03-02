import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/HomePage'
import landingpage from '@/components/LandingPage'
import buttonpage from '@/components/ButtonPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: homepage
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: landingpage
    },
    {
      path: '/buttonpage',
      name: 'buttonpage',
      component: buttonpage
    }
  ]
})
