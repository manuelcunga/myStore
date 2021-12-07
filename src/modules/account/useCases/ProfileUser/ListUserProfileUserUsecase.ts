import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/IUserRepository'

 interface IResponse{
  profile:{
   name: string,
   username: string,
   email: string
  }
}

@injectable()
export class ListUserProfileUserUsecase {
  constructor (
    @inject('UsersRepository')
    private userRepository: IUserRepository
  ) {}

  async execute (id: string): Promise<IResponse> {
    const profile = await this.userRepository.findById(id)

    const userProfile: IResponse = {
      profile: {
        name: profile.name,
        username: profile.username,
        email: profile.email
      }
    }

    return userProfile
  }
}
