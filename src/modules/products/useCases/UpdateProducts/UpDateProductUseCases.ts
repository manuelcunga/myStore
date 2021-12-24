import { inject, injectable } from 'tsyringe'
import { ICreateProductDTO } from '../../dtos/IProductsDTO'
import { IProductsRepository } from '../../repositories/IProductsRepository'

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
