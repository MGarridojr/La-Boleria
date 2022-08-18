import { Router } from "express";
import { cakesnomepraperguntarfelipe } from "../controllers/cakesController.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import cakesSchema from "../schemas/cakesSchema.js";


const cakesRouter = Router();

cakesRouter.post("/cakes",validateSchema(cakesSchema) ,cakesnomepraperguntarfelipe )

export default cakesRouter