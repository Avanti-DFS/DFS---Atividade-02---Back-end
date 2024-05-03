
import express from "express";
import { routes as localRoutes } from "./routes/LocalRoutes.js";
import { routers as categoriasRoutes } from "./routes/categoriaRoutes.js";
import { routes as clienteRoutes } from "./routes/ClienteRoutes.js"
import { routes as loginRoutes } from "./routes/LoginRoutes.js"

const app = express();

app.use(express.json());

app.use(localRoutes);
app.use(categoriasRoutes);
app.use(clienteRoutes)
app.use(loginRoutes)

app.listen(3000, () => {
    console.log("Server running")
})