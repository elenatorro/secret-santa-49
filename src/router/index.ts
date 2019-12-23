import Vue from 'vue'
import VueRouter from 'vue-router'
import pages from '@/constants/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: pages.MAIN_PATH,
    component: _lazyLoad(pages.MAIN_VIEW)
  },
  {
    path: `/${pages.ABOUT_PATH}`,
    name: pages.ABOUT_PATH,
    component: _lazyLoad(pages.ABOUT_VIEW)
  },
  {
    path: `/${pages.INSTRUCTIONS_PATH}`,
    name: pages.INSTRUCTIONS_PATH,
    component: _lazyLoad(pages.INSTRUCTIONS_VIEW)
  }, {
    path: `/${pages.WELCOME_PATH}`,
    name: pages.WELCOME_PATH,
    component: _lazyLoad(pages.WELCOME_VIEW)
  }, {
    path: `/${pages.QUESTIONS_PATH}`,
    name: pages.QUESTIONS_PATH,
    component: _lazyLoad(pages.QUESTIONS_VIEW)
  }, {
    path: `/${pages.SOLVE_PATH}`,
    name: pages.SOLVE_PATH,
    component: _lazyLoad(pages.SOLVE_VIEW)
  }, {
    path: `/${pages.GAME_OVER_PATH}`,
    name: pages.GAME_OVER_PATH,
    component: _lazyLoad(pages.GAME_OVER_VIEW)
  }
]

const router = new VueRouter({
  routes
})

export default router

function _lazyLoad (view: string) {
  return () => import(`@/views/${view}.vue`)
}
