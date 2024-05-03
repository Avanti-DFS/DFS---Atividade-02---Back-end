import { Router } from "express"
import { EventoController } from "../controller/EventoController.js";

const routes = Router();

const eventoController = new EventoController();

routes.get("/eventos", eventoController.findAllEventos);
routes.post('/evento', eventoController.createEvento);
routes.put("/eventos/:id", eventoController.updateEvento);
routes.delete("/eventos/:id", eventoController.deleteEvento);

export { routes }
