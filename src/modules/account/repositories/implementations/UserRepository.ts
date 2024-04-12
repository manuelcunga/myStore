import { getRepository, Repository } from 'typeorm';
import { ICreateUserDTO } from '../../dtos/CreateUserDTO';
import { Users } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';

export class UserRepository implements IUserRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = getRepository(Users);
  }

  async create(userData: ICreateUserDTO): Promise<void> {
    const { name, username, password, gender, email, id } = userData;
    const user = this.repository.create({ name, username, password, gender, email, id });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    return this.repository.findOne({ email });
  }

  async findByUser(id: string): Promise<Users | undefined> {
    return this.repository.findOne(id);
  }

  async findById(id: string): Promise<Users | undefined> {
    return this.repository.findOne(id);
  }
}
