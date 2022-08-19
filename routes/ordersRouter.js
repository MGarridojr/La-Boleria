import { Router } from "express";
import { createOrders, getAllOrders } from "../controllers/ordersControllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/ordersSchema.js";


const ordersRouter = Router();

ordersRouter.post("/order",validateSchema(orderSchema) ,createOrders)
ordersRouter.get("/orders", getAllOrders)


export default ordersRouter;