import { Router } from "express";
import { createOrders, getAllOrders, getClientsOrders, getOrder } from "../controllers/ordersControllers.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import orderSchema from "../schemas/ordersSchema.js";


const ordersRouter = Router();

ordersRouter.post("/order",validateSchema(orderSchema) ,createOrders);
ordersRouter.get("/orders", getAllOrders);
ordersRouter.get("/orders/:id", getOrder);
ordersRouter.get("/clients/:id/orders", getClientsOrders);


export default ordersRouter;