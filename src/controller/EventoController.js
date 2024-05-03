import { prismaCliente } from "../database/PrismaClient.js";

export class EventoController {
  async findAllEventos (request, response) {
    try {
      const eventos = await prismaCliente.evento.findMany();
      response.status(200).json(eventos);
    } catch(error) {
      response.status(500).send();
    }
  };

  async createEvento (request, response) {
    try {
      const { nome, data, descricao, categoria_id, local_id } = request.body;
      const evento = await prismaCliente.evento.create({
        data: {
          nome,
          data,
          descricao,
          categoria_id,
          local_id,
        }
      });
      response.status(201).json(evento);
    } catch (error) {
      response.status(500).send();
    }  
  };

  async updateEvento (request, response) {
    try {
      const { id } = request.params;
      const { nome, data, descricao, categoria_id, local_id} = request.body;
      const evento = await prismaCliente.evento.update({
        where: {
          id
        },
        data:{
          nome,
          data,
          descricao,
          categoria_id, 
          local_id
        }
      });
      if (!evento){
        response.status(404).send();
      } 
      response.status(200).json(evento);
    } catch (error) {
      response.status(500).send();
    }
  };

  async deleteEvento (request, response) {
    try {
      const { id } = request.params;
      const evento = await prismaCliente.evento.delete({
        where: {
          id
        }
      });
      if (!evento){
        response.status(404).send();
      }
      response.status(204).send();
    } catch (error) {
        response.status(500).send();
      } 
  };
}