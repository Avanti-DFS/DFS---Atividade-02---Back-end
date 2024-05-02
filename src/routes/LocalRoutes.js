import { Router } from "express"
import { LocalController } from "../controller/LocalController.js";

const routes = Router();

const localController = new LocalController();

routes.get("/locais", localController.findAllLocais)

routes.get("/local/:id", localController.findLocalById)

routes.post("/local", localController.createLocal)

routes.put("/local/:id", localController.updateLocal)

routes.delete("/local/:id", localController.deleteLocal)

export { routes }