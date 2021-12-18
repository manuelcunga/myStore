import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListProductByUserUseCases } from './ListProductByUserUseCases'

export class ListProductByUserController {
  async handle (request:Request, response:Response) {
    const { id } = request.params

    const productUseCases = container.resolve(ListProductByUserUseCases)

    const result = await productUseCases.execute(id)

    return response.json(result)
  }
}
