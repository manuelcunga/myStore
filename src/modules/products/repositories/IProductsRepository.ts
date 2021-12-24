import { ICreateProductDTO } from '../dtos/IProductsDTO'
import { products } from '../entities/products'

export interface IProductsRepository{
  create(data: ICreateProductDTO): Promise<products>
  finByTitle(title: string):Promise<products>
  deleteById(id: string):Promise<void>
  findById(id: string) : Promise<products>
  upDateProduct(data: ICreateProductDTO):Promise<void>
}
