import { hash } from 'bcryptjs'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/infra/http/error/AppError'
import { ICreateUserDTO } from '../../dtos/CreateUserDTO'
import { IUserRepository } from '../../repositories/IUserRepository'

@injectable()
export class CreateUserUseCases {
  constructor (
    @inject('UsersRepository')
    private createUserRepository: IUserRepository
  ) {}

  async execute ({
    name,
    username,
    password,
    gender,
    email

  }: ICreateUserDTO): Promise<void> {
    const userExists = await this.createUserRepository.findByEmail(email)

    if (userExists) {
      throw new AppError('User already exists!')
    }

    const passwordHas = (await hash(password, 8)).toString()

    await this.createUserRepository.create({
      name,
      username,
      password: passwordHas,
      gender,
      email
    })
  }
}
