import { inject, injectable } from 'tsyringe'
import { IProductsRepository } from '../../repositories/IProductsRepository'

interface IResponse{
  product:{
   title: string,
   quantity: number,
   price: number,
   description: string
   user_post: string
  }
}

@injectable()
export class ListProductByUserUseCases {
  constructor (
    @inject('ProductsRepository')
    private productUseCases: IProductsRepository
  ) {}

  async execute (id: string):Promise<IResponse> {
    const findUser = await this.productUseCases.findById(id)

    const productUserPost: IResponse = {

      product: {
        title: findUser.title,
        quantity: findUser.quantity,
        price: findUser.price,
        description: findUser.description,
        user_post: findUser.user_send
      }
    }

    return productUserPost
  }
}
