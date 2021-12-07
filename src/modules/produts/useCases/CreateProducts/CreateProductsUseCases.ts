import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/infra/http/error/AppError'
import { ICreateProductDTO } from '../../dtos/IProdutsDTO'
import { produts } from '../../entities/produts'
import { IProductsRepository } from '../../repositories/IProdutsRepository'

@injectable()
export class CreateProductsUseCases {
  constructor (
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository
  ) {}

  async execute ({
    title,
    quantity,
    price,
    description,
    user_send
  }:ICreateProductDTO):Promise<produts> {
    const alreadyProducts = await this.productsRepository.finByTitle(title)

    if (alreadyProducts) {
      throw new AppError(' Product already exists!')
    }

    const products = await this.productsRepository.create({
      title,
      quantity,
      price,
      description,
      user_send
    })

    return products
  }
}
