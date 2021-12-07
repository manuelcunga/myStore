import { Router } from 'express'
import { CreateUserController } from '../../../../modules/account/useCases/CreateUser/CreateUserController'
import { ListProfileUserController } from '../../../../modules/account/useCases/ProfileUser/ListProfileUserController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const usersRouter = Router()

const userController = new CreateUserController()
const Profile = new ListProfileUserController()

usersRouter.post(
  '/cadastrar',
  userController.handle)

usersRouter.get(
  '/profile/:id',
  ensureAuthenticated,
  Profile.handle
)

export { usersRouter }
