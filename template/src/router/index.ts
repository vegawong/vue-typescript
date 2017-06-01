import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = []

function addRoute(path: string, name: string, component: any) {
  routes.push({
    path: path,
    name: name,
    component: component
  })
  return addRoute
}

addRoute
  (
  '/(home)?', 'home',
  (r) => require.ensure([], () => r(require('views/home')['default']), 'name')
  )
  (
  '*', 'defaultView',
  (r) => require.ensure([], () => r(require('views/home')['default']), 'name')
  )

export default new Router({
  routes: routes
})
