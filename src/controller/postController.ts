import { Request, Response } from "express";
import { postService } from "../service/postService";

export const postController = {
  //POST /posts
  posting: async (req: Request, res: Response) => {
    const { description, userId } = req.body;

    const id = await postService.findByPkShowAllPosts(userId);

    if (!id) {
      return res.json("Usuário não existe!");
    } else {
      try {
        const post = await postService.posting(description, userId);

        return res.status(201).json(post);
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    }
  },
  //PUT /update/post
  update: async (req: Request, res: Response) => {
    const { id, description } = req.body;

    const verifyId = await postService.findOnePost(id);

    if (!verifyId) {
      return res.json("Post inexistente.");
    } else {
      try {
        await postService.updatePost(id, description);
        const newDescription = await postService.findOnePost(id);

        return res.status(200).json(newDescription);
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    }
  },
  //DELETE /delete
  delete: async (req: Request, res: Response) => {
    const { id } = req.body;

    const verifyId = await postService.findOnePost(id);

    if (!verifyId) {
      return res.json("Post inexistente.");
    }
    try {
      await postService.deletePost(id);

      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //GET /show/posts/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const postings = await postService.findByPkShowAllPosts(id);

      if (!postings) {
        return res.json("Usuário não existe!");
      }
      return res.json(postings);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
