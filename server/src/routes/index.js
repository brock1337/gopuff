import Router from 'koa-router'
import routerV1 from './v1/index'

const router = new Router({
  prefix: '/api'
})

// Add version 1 router
router.use(routerV1.routes())
router.use(routerV1.allowedMethods())

export default router
