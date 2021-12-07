import { Router } from 'express'
import { CreateProductsController } from '../../../../modules/produts/useCases/CreateProducts/CreateProductsControler'
import { DeleteProdutController } from '../../../../modules/produts/useCases/DeleteProducts/deleteProdutsUseCases'
import { ListProductByUserController } from '../../../../modules/produts/useCases/listByUser/ListProductByUserController'
import { UpDateProductController } from '../../../../modules/produts/useCases/UpdateProducts/UpdateProdutController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const products = Router()
const productController = new CreateProductsController()
const deleteProdut = new DeleteProdutController()
const listByUser = new ListProductByUserController()
const upDate = new UpDateProductController()

products.post(
  '/',
  ensureAuthenticated,
  productController.handle)

products.delete(
  '/delete/:id',
  ensureAuthenticated,
  deleteProdut.handle)

products.get(
  '/list/:id',
  ensureAuthenticated,
  listByUser.handle)

products.put(
  '/update/:id',
  ensureAuthenticated,
  upDate.handle)

export { products }
