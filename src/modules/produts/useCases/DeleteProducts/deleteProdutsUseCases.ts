import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteProductUseCases } from './deleteProductsController'

export class DeleteProdutController {
  async handle (request:Request, response:Response):Promise<Response> {
    const { id } = request.params
    const produtUseCase = container.resolve(DeleteProductUseCases)

    const produtDelete = await produtUseCase.execute(id)

    return response.json({ sucess: 'Product deleted!' })
  }
}
