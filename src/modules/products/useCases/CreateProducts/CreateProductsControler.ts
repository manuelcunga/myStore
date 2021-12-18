import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateProductsUseCases } from './CreateProductsUseCases'

export class CreateProductsController {
  async handle (request:Request, response:Response):Promise<Response> {
    const {
      title,
      quantity,
      price,
      description
    } = request.body

    const { id } = request.user

    const productsUseCases = container.resolve(CreateProductsUseCases)

    const products = await productsUseCases.execute({
      title,
      quantity,
      price,
      description,
      user_send: id
    })

    return response.json(products)
  }
}
