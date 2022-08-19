import { Request, Response } from "express";
import { jwtService } from "../service/jwtService";
import { userService } from "../service/userService";
import bcrypt from "bcrypt";
import { roleService } from "../service/roleService";

export const authController = {
  //POST /register/auth
  register: async (req: Request, res: Response) => {
    const { name, email, roleId, password, confirmPassword } = req.body;

    if (password != confirmPassword) {
      return res.status(400).json("Os passwords não são iguais.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const userAlreadyExists = await userService.findByEmail(email);

      if (userAlreadyExists) {
        throw new Error("Este e-mail já está cadastrado.");
      }

      const roleAlreadyNotExiste = await roleService.findRoleByPk(roleId);

      if (!roleAlreadyNotExiste) {
        throw new Error("Essa role não existe!");
      }

      const user = await userService.create(
        name,
        email,
        hashedPassword,
        roleId
      );

      return res.status(201).json({ name, email, roleId });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //POST /auth/login
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
      const user = await userService.findByEmail(email);
      if (!user)
        return res.status(404).json({ message: "Usuário não existe!" });

      const payload = {
        email: email,
        name: name,
        //Password pode ou não ser passado no payload em forma de json para aparacer na tela?!?!?!
        //password:
      };

      const token = jwtService.singToken(payload, "7d");

      return res.json({ ...payload, token });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
