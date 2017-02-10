import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './Index.vue'
import NotFound from './NotFound'
import Doc from './components/Doc/Doc.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/:component', component: Doc },
    { path: '*', component: NotFound } // Not found
  ]
})
