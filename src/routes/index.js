import { Router } from "express";

import CategoriaController from "../controller/CategoriasController.js";



const routers = Router();

// rotas categorias
routers.post('/categorias', CategoriaController.criarCategoria);
routers.get('/categorias', CategoriaController.listarCategorias);
routers.get('/categorias/:id', CategoriaController.buscarCategoriaPorId);
routers.put('/categorias/:id', CategoriaController.atualizarCategoria);
routers.delete('/categorias/:id', CategoriaController.deletarCategoria);

export { routers }