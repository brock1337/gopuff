import Router from 'koa-router'

const routerV1 = new Router({
  prefix: '/v1'
})

routerV1.get('/', async (ctx, next) => {
  ctx.body = 'API version: 1.0.0'
})

export default routerV1
