import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateProductUseCases } from './UpDateProductUseCases'

export class UpDateProductController {
  async handle (request:Request, response:Response):Promise<Response> {
    const {
      title,
      quantity,
      price,
      description
    } = request.body

    const { id } = request.user
    const productUseCases = container.resolve(UpdateProductUseCases)

    await productUseCases.execute({
      title,
      quantity,
      price,
      description,
      user_send: id
    })

    return response.json({ success: 'Product updated!' })
  }
}
