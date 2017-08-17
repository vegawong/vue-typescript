/**
 * home module router
 */

import Router from 'vue-router'

function getView(viewName) {
  return (resolve, reject) => {
    require.ensure([], (require) => {
      let map = {
        'home': require('views/home'),
        'defaultView': require('views/home'),
        'todo': require('views/todo'),
        'scoped': require('views/scoped')
      }

      resolve(map[viewName])
    }, reject, 'home')
  }
}

let routes: Router.RouteConfig[] = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'defaultView',
    path: '*'
  },
  {
    name: 'todo',
    path: '/todo/:filter?'
  },
  {
    name: 'scoped',
    path: '/scoped'
  }
]

routes.forEach((v) => {
  if (!v.redirect && !v.component) {
    v.component = getView(v.name)
  }
})

export default routes
