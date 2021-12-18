import { inject, injectable } from 'tsyringe'
import { IProductsRepository } from '../../repositories/IProductsRepository'

@injectable()
export class DeleteProductUseCases {
  constructor (
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute (id: string) {
    const product = await this.productsRepository.deleteById(id)
    return product
  }
}
