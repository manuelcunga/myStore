import { ICreateUserDTO } from '../dtos/CreateUserDTO'
import { Users } from '../entities/User'

export interface IUserRepository{
  create(data: ICreateUserDTO): Promise<void>
  findByEmail(email: string): Promise<Users>
  findById(id: string) : Promise<Users>
  findByUser(id: string): Promise<Users>
}
