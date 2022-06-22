import { Router } from "express";
import { cakesnomepraperguntarfelipe } from "../controllers/cakesController.js";


const cakesRouter = Router();

cakesRouter.post("/cakes", cakesnomepraperguntarfelipe )

export default cakesRouter