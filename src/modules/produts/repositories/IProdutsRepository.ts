import { ICreateProductDTO } from '../dtos/IProdutsDTO'
import { produts } from '../entities/produts'

export interface IProductsRepository{
  create(data: ICreateProductDTO): Promise<produts>
  finByTitle(title: string):Promise<produts>
  deleteById(id: string):Promise<void>
  findById(id: string) : Promise<produts>
  upDateProduct(data: ICreateProductDTO):Promise<void>
}
