import productRouter from "../inputs/product.js";
import { productsFindAll } from "../../controllers/product/product.js";


productRouter.get('/findAll/:shopId', productsFindAll)


export default productRouter;