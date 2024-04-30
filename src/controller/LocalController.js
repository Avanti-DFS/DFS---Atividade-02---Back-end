import { prismaCliente } from "../database/PrismaClient.js";

export class LocalController {
    async findAllLocais(request, response){
        try {
            const locais = await prismaCliente.local.findMany();
            response.status(200).json(locais);
        } catch (error) {
            response.status(500).send();
        }
    }

    
    async createLocal(request, response){
        try {
            const { nome, endereco } = request.body;
            const local = await prismaCliente.local.create({
            data:{
                nome: nome,
                endereco: endereco
            }
        })
            response.status(201).json(local);
        } catch (error) {
            response.status(500).send();
        }
        
    }

    async updateLocal(request, response) {
        try {
            const { id } = request.params;
            const { nome, endereco } = request.body;
            const local = await prismaCliente.local.update({
            where: {
                id
            },
            data:{
                nome: nome,
                endereco: endereco
            }
        })
            if (!local){
                response.status(404).send();
            }
            response.status(200).json(local);
        } catch (error) {
            response.status(500).send();
        }
        
    }

    async deleteLocal(request, response) {
        try {
            const { id } = request.params;
            const local = await prismaCliente.local.delete({
            where: {
                id
            }
        })
        if (!local){
            response.status(404).send();
        }
            response.status(204).send();
        } catch (error) {
            response.status(500).send();
        }
        
    }
}