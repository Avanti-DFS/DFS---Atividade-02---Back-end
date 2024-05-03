import { Router } from "express"
import { EventoController } from "../controller/EventoController.js";
import authenticate from "../auth/authenticate.js";
import authorization from "../auth/authorization.js";

const routes = Router();

const eventoController = new EventoController();

routes.get("/eventos", authenticate, eventoController.findAllEventos);
routes.get("/eventos/search", authenticate, eventoController.filterEvento);
routes.post('/evento', authorization, eventoController.createEvento);
routes.put("/eventos/:id", authorization, eventoController.updateEvento);
routes.delete("/eventos/:id", authorization, eventoController.deleteEvento);

export { routes }
