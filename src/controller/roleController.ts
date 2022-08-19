import { Request, Response } from "express";
import { roleService } from "../service/roleService";

export const roleController = {
  //POST /create/role
  createRole: async (req: Request, res: Response) => {
    const { roleName } = req.body;

    try {
      const roleAlreadyExists = await roleService.findRole(roleName);

      if (roleAlreadyExists) {
        throw new Error("Está role ja existe.");
      }

      const role = await roleService.create(roleName);

      return res.status(200).json(role);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //GET /find/role
  showUserRole: async (req: Request, res: Response) => {
    const { id } = req.body;

    const role = await roleService.findUsersOnRole(id);

    if (!role) return res.status(404).json("Role inexistente");

    return res.status(200).json(role);
  },
};
