import { Router } from 'express'
import { CreateProductsController } from '../../../../modules/products/useCases/CreateProducts/CreateProductsControler'
import { DeleteProductController } from '../../../../modules/products/useCases/DeleteProducts/deleteProductsUseCases'
import { ListProductByUserController } from '../../../../modules/products/useCases/listByUser/ListProductByUserController'
import { UpDateProductController } from '../../../../modules/products/useCases/UpdateProducts/UpdateProductController'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

const products = Router()
const productController = new CreateProductsController()
const deleteProduct = new DeleteProductController()
const listByUser = new ListProductByUserController()
const upDate = new UpDateProductController()

products.post(
  '/',
  ensureAuthenticated,
  productController.handle)

products.delete(
  '/delete/:id',
  ensureAuthenticated,
  deleteProduct.handle)

products.get(
  '/list/:id',
  ensureAuthenticated,
  listByUser.handle)

products.put(
  '/update/:id',
  ensureAuthenticated,
  upDate.handle)

export { products }
