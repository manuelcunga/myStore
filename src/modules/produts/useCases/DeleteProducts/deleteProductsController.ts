import { inject, injectable } from 'tsyringe'
import { IProductsRepository } from '../../repositories/IProdutsRepository'

@injectable()
export class DeleteProductUseCases {
  constructor (
    @inject('ProductsRepository')
    private produtusRepository: IProductsRepository
  ) {}

  async execute (id: string) {
    const produt = await this.produtusRepository.deleteById(id)
    return produt
  }
}
