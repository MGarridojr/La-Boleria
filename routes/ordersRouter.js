import { Router } from "express";
import { createOrders } from "../controllers/ordersControllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/ordersSchema.js";


const ordersRouter = Router();

ordersRouter.post("/order",validateSchema(orderSchema) ,createOrders)


export default ordersRouter;