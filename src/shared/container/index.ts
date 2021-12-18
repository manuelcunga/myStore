import { container } from 'tsyringe'
import { UserRepository } from '../../modules/account/repositories/implementations/UserRepository'
import { IUserRepository } from '../../modules/account/repositories/IUserRepository'
import { ProductsRepository } from '../../modules/products/repositories/implementations/ProductsRepository'
import { IProductsRepository } from '../../modules/products/repositories/IProductsRepository'

container.registerSingleton<IUserRepository>(
  'UsersRepository', UserRepository
)

container.registerSingleton<IProductsRepository>(
  'ProductsRepository', ProductsRepository
)
