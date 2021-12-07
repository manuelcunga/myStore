import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListUserProfileUserUsecase } from './ListUserProfileUserUsecase'

export class ListProfileUserController {
  async handle (request:Request, response:Response) {
    const profileUsecases = container.resolve(ListUserProfileUserUsecase)

    const { id } = request.params
    const result = await profileUsecases.execute(id)
    return response.json(result)
  }
}
