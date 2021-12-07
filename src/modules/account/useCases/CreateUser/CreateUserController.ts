import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCases } from './CreateUserUseCases'

export class CreateUserController {
  async handle (request:Request, response:Response) {
    const { name, username, password, gender, email } = request.body

    const createUserUsecases = container.resolve(CreateUserUseCases)
    await createUserUsecases.execute({
      name,
      username,
      password,
      gender,
      email
    })

    return response.status(201).json({
      message: 'User registerd'
    })
  }
}
