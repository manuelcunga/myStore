import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteProductUseCases } from './deleteProductsController'

export class DeleteProductController {
  async handle (request:Request, response:Response):Promise<Response> {
    const { id } = request.params
    const productUseCase = container.resolve(DeleteProductUseCases)

    const productDelete = await productUseCase.execute(id)

    return response.json({ sucess: 'Product deleted!' })
  }
}
