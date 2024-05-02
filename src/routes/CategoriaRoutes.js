import { Router } from "express";

import CategoriaController from "../controller/CategoriasController.js";



const routers = Router();

// rotas categorias
routers.get('/categorias', CategoriaController.listarCategorias);
routers.get('/categoria/:id', CategoriaController.buscarCategoriaPorId);
routers.post('/categoria', CategoriaController.criarCategoria);
routers.put('/categoria/:id', CategoriaController.atualizarCategoria);
routers.delete('/categoria/:id', CategoriaController.deletarCategoria);

export { routers }