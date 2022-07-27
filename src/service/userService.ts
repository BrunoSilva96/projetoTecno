import { User } from "../models";
import {UserCreationAttributes } from "../models/User";

export const userService = {
   create: async (attributes: UserCreationAttributes) => {
      const user = await User.create(attributes)
      return user;
   },

   findByEmail: async (email: string) => {
      const user = await User.findOne({where: {email}})
      return user;
   },

   findUsers: async () => {
      const allUsers = await User.findAll()
      return allUsers;
   },

   delete: async (email: string) => {
      await User.destroy({where: {email: email}})
      return 1;
   },

   updateUser: async (  
      name: string,
      email: string
   ) => {
      const updatedUsers = await User.update({name: name}, {where: {email}})

      return updatedUsers;
   }
}