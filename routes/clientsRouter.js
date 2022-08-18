import { Router } from "express";
import { createClients } from "../controllers/clientsController.js";


const clientsRouter = Router();

clientsRouter.post("/clients", createClients)

export default clientsRouter;