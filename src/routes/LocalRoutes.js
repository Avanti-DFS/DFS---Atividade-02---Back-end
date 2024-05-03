import { Router } from "express"
import { LocalController } from "../controller/LocalController.js";
import authenticate from "../auth/authenticate.js";
import authorization from "../auth/authorization.js";

const routes = Router();

const localController = new LocalController();

routes.get("/locais", authenticate, localController.findAllLocais)

routes.get("/local/:id", authenticate, localController.findLocalById)

routes.post("/local", authorization, localController.createLocal)

routes.put("/local/:id", authorization, localController.updateLocal)

routes.delete("/local/:id", authorization, localController.deleteLocal)

export { routes }