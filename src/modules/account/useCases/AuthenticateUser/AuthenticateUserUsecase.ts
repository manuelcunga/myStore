/* eslint-disable no-useless-constructor */
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/infra/http/error/AppError'
import { IUserRepository } from '../../repositories/IUserRepository'

interface IRequest{
  email: string
  password: string
}

interface IResponse{
  user:{
    name: string
    email: string
  },
  token: string
}

@injectable()
export class AuthenticateUserUseCase {
  constructor (
    @inject('UsersRepository')
    private userRepositories: IUserRepository
  ) {}

  async execute ({ email, password }:IRequest): Promise<IResponse> {
    const user = await this.userRepositories.findByEmail(email)

    if (!user) {
      throw new AppError('Email or password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect')
    }

    const token = sign({}, '$2a$09$u/X211.AigOHTobHghaNQuESrMNRxAAbVBvOjf1HVe9AfPD', {
      subject: user.id,
      expiresIn: '1d'
    })
    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email
      },
      token
    }
    return tokenReturn
  }
}
