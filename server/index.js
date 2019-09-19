import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import logger from 'koa-logger'
import router from './src/routes/index'

const app = new Koa()
const PORT = process.env.PORT || 3000

app.use(logger())

app.use(cors({
  origin: '*'
}))

app.use(bodyParser({
  enableTypes: ['json']
}))

// Routers
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => console.log(`Server listening on PORT --> ${PORT}`))
