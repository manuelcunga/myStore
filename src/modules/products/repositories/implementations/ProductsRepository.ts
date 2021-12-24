import { getRepository, Repository } from 'typeorm'
import { ICreateProductDTO } from '../../dtos/IProductsDTO'
import { products } from '../../entities/products'
import { IProductsRepository } from '../IProductsRepository'

export class ProductsRepository implements IProductsRepository {
  private repository: Repository<products>

  constructor () {
    this.repository = getRepository(products)
  }

  async create ({
    title,
    quantity,
    price,
    description,
    user_send
  }: ICreateProductDTO): Promise<products> {
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

  async finByTitle (title: string): Promise<products> {
    const result = await this.repository.findOne({ title })
    return result
  }

  async deleteById (id: string): Promise<void> {
    await this.repository.delete({ id })
  }

  async findById (id: string): Promise<products> {
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
    const products = this.repository.create({
      title,
      quantity,
      price,
      description,
      user_send
    })

    await this.repository.save(products)
  }
}
