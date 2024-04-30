import { Router } from "express"
import { prismaCliente } from "../database/PrismaClient.js";
import { LocalController } from "../controller/LocalController.js";

const routes = Router();

const localController = new LocalController();

routes.get("/", localController.findAllLocais)

routes.post("/local", localController.createLocal)

routes.put("/local/:id", localController.updateLocal)

routes.delete("/local/:id", localController.deleteLocal)

export { routes }