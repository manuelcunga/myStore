import { getRepository, Repository } from 'typeorm'
import { ICreateProductDTO } from '../../dtos/IProdutsDTO'
import { produts } from '../../entities/produts'
import { IProductsRepository } from '../IProdutsRepository'

export class ProductsRepository implements IProductsRepository {
  private repository: Repository<produts>

  constructor () {
    this.repository = getRepository(produts)
  }

  async create ({
    title,
    quantity,
    price,
    description,
    user_send
  }: ICreateProductDTO): Promise<produts> {
    const products = this.repository.create({
      title,
      quantity,
      price,
      description,
      user_send
    })

    await this.repository.save(products)
    return products
  }

  async finByTitle (title: string): Promise<produts> {
    const result = await this.repository.findOne({ title })
    return result
  }

  async deleteById (id: string): Promise<void> {
    await this.repository.delete({ id })
  }

  async findById (id: string): Promise<produts> {
    const result = await this.repository.findOne(id)
    return result
  }

  async upDateProduct (
    {
      title,
      quantity,
      price,
      description,
      user_send
    }: ICreateProductDTO
  ): Promise<void> {
    const produts = this.repository.create({
      title,
      quantity,
      price,
      description,
      user_send
    })

    await this.repository.save(produts)
  }
}
