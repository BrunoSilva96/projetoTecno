import { Active } from "../models/Actives";

export const activeService = {
  createActive: async (value: number, description: string, dueDate: string) => {
    const activities = await Active.create({ value, description, dueDate });

    return activities;
  },
  findById: async (id: string) => {
    const activitie = await Active.findByPk(id, {
      attributes: ["value", "description", ["due_date", "dueDate"]],
    });

    return activitie;
  },
  updateDescription: async (id: string, description: string) => {
    const updateActivitie = await Active.update(
      { description: description },
      { where: { id } }
    );

    return updateActivitie;
  },
  deleteDescription: async (id: string) => {
    await Active.destroy({ where: { id } });
    return 1;
  },
};
