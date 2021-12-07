import { Router } from 'express'
import { AuthenticateUserController } from '../../../../modules/account/useCases/AuthenticateUser/AuthenticateUserController'

const authenticateRoutes = Router()
const authenticate = new AuthenticateUserController()
authenticateRoutes.post('/session', authenticate.handle)

export { authenticateRoutes }
