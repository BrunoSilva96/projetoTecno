import { Active } from "../models/Actives";

export const activeService = {
   createActive: async (value: number, description: string, dueDate: string) => {
      const activities = await Active.create({value,description, dueDate})

      return activities
   },
   findById: async (id: number) => {
      const activitie = await Active.findByPk(id, {
         attributes: ['description', 'dueDate']
      })

      return activitie
   },
   updateDescription: async (id: number, description: string) => {
      const updateActivitie = await Active.update({description: description}, {where: {id}})

      return updateActivitie;
   },
   deleteDescription: async (id: number) => {
      await Active.destroy({where: {id}})
      return 1
   }
}