import { Request, Response } from "express";
import { userService } from "../service/userService";

export const userController = {
   //POST /register
   register: async (req: Request, res: Response) => {
      const { name, email, password } = req.body

      try {
         const userAlreadyExists = await userService.findByEmail(email)

         if (userAlreadyExists) {
            throw new Error('Este e-mail ja esta cadastrado.')
         }

         const user = await userService.create({
            name,
            email, 
            password,
            role: 'user'
         })
         
         return res.status(201).json(user)
         
      } catch (err) {
         
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },

   //GET /show
   show: async (req: Request, res: Response) => {

      try {
         const allUsers = await userService.findUsers()

         return res.status(201).json(allUsers);
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },

   //DELETE /delete
   delete: async (req: Request, res: Response) =>{
       const {email, name } = req.body

      try {
         await userService.delete(email)
      
         return res.status(204).send()
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },
   
   //PUT /update
   update: async (req: Request, res: Response) => {
      const { name, email } = req.body
   
      try {
         await userService.updateUser(name, email)
         const newNameUser = await userService.findByEmail(email)
         return res.json(newNameUser);
      } catch (err) {
         if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
         }
      }
   },
}