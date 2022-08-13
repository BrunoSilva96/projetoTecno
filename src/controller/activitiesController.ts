import { Request, Response } from "express";
import { activeService } from "../service/activitiesService";

export const activitiesController = { 
   //POST /activities
   createActive: async (req: Request, res: Response) => {
      const { value, description, dueDate } = req.body

      try {
         const actives = await activeService.createActive(value, description, dueDate)

         return res.status(200).json(actives)
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },
   //GET
   findactivitie: async (req: Request,res: Response) => {
      const id = req.body
      try {
         await activeService.findById(id)
         return id
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },
   //PUT
   updateActivitieDescription: async (req: Request, res: Response) => {
      const { id, description } = req.body

      try {
        const newDescription =  await activeService.updateDescription(id, description)

         return newDescription;
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },
   //DELETE
   deleteActivitie: async (req: Request, res: Response) => {
      const id = req.body

      try {
         await activeService.deleteDescription(id)
         
         return 1
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   }
}