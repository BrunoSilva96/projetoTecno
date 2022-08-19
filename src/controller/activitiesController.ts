import { Request, Response } from "express";
import { activeService } from "../service/activitiesService";

export const activitiesController = {
  //POST /activities
  createActive: async (req: Request, res: Response) => {
    const { value, description, dueDate } = req.body;

    try {
      const actives = await activeService.createActive(
        value,
        description,
        dueDate
      );

      return res.status(200).json(actives);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //GET /show/active
  findactivitie: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const activeId = await activeService.findById(id);
      if (!activeId) {
        res.json("Atividade não existe!");
      }
      return res.status(200).json(activeId);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //PUT /update/active
  updateActivitieDescription: async (req: Request, res: Response) => {
    const { id, description } = req.body;

    try {
      const activeId = await activeService.findById(id);
      if (!activeId) {
        res.json("Atividade não existe!");
      }
      await activeService.updateDescription(id, description);
      //Voltando sem o update, verificar isso e corrigir

      return res.json(activeId);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //DELETE
  deleteActivitie: async (req: Request, res: Response) => {
    const { id } = req.body;

    try {
      await activeService.deleteDescription(id);

      return res.status(200);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
