import { Role } from "../models/Role";

export const roleService = {
  create: async (roleName: string) => {
    const role = await Role.create({ roleName });
    return role;
  },

  delete: async (roleName: string) => {
    await Role.destroy({ where: { roleName: roleName } });
    return 1;
  },

  findRole: async (roleName: string) => {
    const role = await Role.findOne({ where: { roleName: roleName } });

    return role;
  },

  findRoleByPk: async (id: number) => {
    const role = await Role.findByPk(id);

    return role;
  },

  findUsersOnRole: async (id: number) => {
    const role = await Role.findByPk(id, {
      attributes: ["roleName"],
      include: {
        association: "users",
        attributes: ["name"],
      },
    });
    return role;
  },
};
