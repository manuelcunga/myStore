import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthenticateUserUseCase } from './AuthenticateUserUsecase'

export class AuthenticateUserController {
  async handle (request:Request, response:Response) {
    const { email, password } = request.body

    const authenticateUserUseCases = container.resolve(AuthenticateUserUseCase)

    const token = await authenticateUserUseCases.execute({ email, password })
    return response.json(token)
  }
}
