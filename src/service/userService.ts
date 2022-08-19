import { Users } from "../models";

export const userService = {
  create: async (
    name: string,
    email: string,
    password: string,
    roleId: number
  ) => {
    const user = await Users.create({ name, email, password, roleId });

    return user;
  },

  findByEmail: async (email: string) => {
    const user = await Users.findOne({ where: { email } });
    return user;
  },

  findUserByPk: async (id: string) => {
    const userByPk = await Users.findByPk(id, {
      attributes: ["name", "email", "roleId"],
    });

    return userByPk;
  },

  findUsers: async () => {
    const allUsers = await Users.findAll({
      attributes: ["id", "name", "email", "roleId"],
    });

    return allUsers;
  },

  delete: async (email: string) => {
    await Users.destroy({ where: { email: email } });
    return 1;
  },

  updateUser: async (name: string, email: string) => {
    const updatedUsers = await Users.update(
      { name: name },
      { where: { email } }
    );

    return updatedUsers;
  },

  updateRole: async (roleId: number, email: string) => {
    const updateRole = await Users.update(
      { roleId: roleId },
      { where: { email } }
    );

    return updateRole;
  },
};
