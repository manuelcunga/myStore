import { Router } from 'express'
import { products } from './produts.routes'
import { authenticateRoutes } from './session.routes'
import { usersRouter } from './user.routes'

const router = Router()

router.get('/api/v1/', (req, response) => {
  return response.json({
    message: 'Simple Crud!'
  })
})

router.use('/users', usersRouter)
router.use(authenticateRoutes)

router.use('/product', products)

export { router }

