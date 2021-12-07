import { container } from 'tsyringe'
import { UserRepository } from '../../modules/account/repositories/implementations/UserRepository'
import { IUserRepository } from '../../modules/account/repositories/IUserRepository'
import { ProductsRepository } from '../../modules/produts/repositories/implementations/ProductsRepository'
import { IProductsRepository } from '../../modules/produts/repositories/IProdutsRepository'

container.registerSingleton<IUserRepository>(
  'UsersRepository', UserRepository
)

container.registerSingleton<IProductsRepository>(
  'ProductsRepository', ProductsRepository
)
