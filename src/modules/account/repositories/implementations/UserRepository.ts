import { getRepository, Repository } from 'typeorm'
import { ICreateUserDTO } from '../../dtos/CreateUserDTO'
import { Users } from '../../entities/User'
import { IUserRepository } from '../IUserRepository'

export class UserRepository implements IUserRepository {
  private repository: Repository<Users>
  constructor () {
    this.repository = getRepository(Users)
  }

  async create ({
    name,
    username,
    password,
    gender,
    email,
    id
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      gender,
      email,
      id
    })

    await this.repository.save(user)
  }

  async findByEmail (email: string): Promise<Users> {
    const result = await this.repository.findOne({ email })
    return result
  }

  async findByUser (id: string): Promise<Users> {
    const UserID = await this.repository.findOne(id)
    return UserID
  }

  async findById (id: string): Promise<Users> {
    const result = await this.repository.findOne(id)
    return result
  }
}
