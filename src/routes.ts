import { Router } from 'express';
import multer from 'multer';

//  CONTROLLERS
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { AddItemController } from './controllers/orders/AddItemController';
import { CreateOrderController } from './controllers/orders/CreateOrderController';
import { DeleteOrderController } from './controllers/orders/DeleteOrderController';
import { DetailsOrderController } from './controllers/orders/DetailsOrderController';
import { ListAllOrdersController } from './controllers/orders/ListAllOrdersController';
import { RemoveItemController } from './controllers/orders/RemoveItemController';
import { SendOrderController } from './controllers/orders/SendOrderController';
import { TableDetailsController } from './controllers/orders/TableDetailsController';

import uploudConfig from './config/multer';

//  MIDDLEWARES
import { tokenCheck } from './middlewares/tokenCheck';
const upload = multer(uploudConfig.upload("./tmp"))

const router = Router();


//  ROTAS

//                      ''USER''
router.post('/users', new CreateUserController().handle)
router.post('/auth', new AuthUserController().handle)
router.get('/me', tokenCheck, new DetailUserController().handle)

//                    ''CATEGORY''
router.post('/categories', tokenCheck, new CreateCategoryController().handle)
router.get('/categories', tokenCheck, new ListCategoryController().handle)

//                    ''PRODUCT''
router.post('/products', tokenCheck, upload.single('file'), new CreateProductController().handle)
router.get('/products', tokenCheck, new ListByCategoryController().handle)

//                    ''ORDER''
router.post('/orders', tokenCheck, new CreateOrderController().handle)
router.delete('/orders', tokenCheck, new DeleteOrderController().handle)
router.get('/orders', tokenCheck, new ListAllOrdersController().handle)

router.post('/orders/add', tokenCheck, new AddItemController().handle)
router.delete('/orders/remove', tokenCheck, new RemoveItemController().handle)

router.put('/orders/send', tokenCheck, new SendOrderController().handle)

router.get('/orders/table', tokenCheck, new TableDetailsController().handle)

router.get('/orders/details', tokenCheck, new DetailsOrderController().handle)



export { router };

