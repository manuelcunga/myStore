import { inject, injectable } from 'tsyringe'
import { ICreateProductDTO } from '../../dtos/IProdutsDTO'
import { IProductsRepository } from '../../repositories/IProdutsRepository'

@injectable()
export class UpdateProductUseCases {
  constructor (
    @inject('ProductsRepository')
    private updateRepository: IProductsRepository
  ) {}

  async execute ({
    title,
    quantity,
    price,
    description,
    user_send
  }:ICreateProductDTO):Promise<void> {
    await this.updateRepository.create({
      title,
      quantity,
      price,
      description,
      user_send
    })
  }
}
